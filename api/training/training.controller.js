const { func } = require('joi');
const { db, initializeDb } = require('../../_helpers/db');
const { fetchAllDataInChunks } = require('../../_util');

initializeDb();

//Create an Entry in categories Table
async function createCategory(req, res) {
    // Validate request
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    //Create a new category
    try {
        const id = req.body.id;
        const isExistingCategory = id && await db.models.Categories.findOne({ where: { id } })
            .then((data) => {
                return data;
            });
        let max_id = await db.models.CategoryDetail.max('id') || 0;
        console.log(isExistingCategory, "MAX ID");
        //If Category already exist insert only category details
        if (isExistingCategory) {

            const categoryData = {
                gallery_id: req.body.gallery_id,
                category_icon: req.body.category_icon,
                parent_id: req.body.parent_id,
                category_slug: req.body.category_slug,
                sort_order: req.body.sort_order,
                created_by: req.body.created_by,
                updated_by: req.body.updated_by,
                deleted_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            }

            const categoryDetailsData = {
                id: max_id + 1,
                category_name: req.body.category_name,
                language_id: req.body.language_id,
                description: req.body.description,
                category_id: req.body.id
            }
            if (!categoryDetailsData.language_id) {
                return res.status(409).json({ error: 'language_id is required' });
            }

            const existinglanguageId = await db.models.CategoryDetail.findOne({ where: { language_id: req.body.language_id, category_id: req.body.id } })
                .then((data) => {
                    return data;
                });
            if (existinglanguageId) {
                return res.status(409).json({ error: 'language already exist for this category' });
            }

            const response = {}

            await db.models.Categories.update(categoryData, { where: { id: req.body.id }, })
                .then((data) => {
                    response.category = data == 1 ? { ...categoryData, id: req.body.id } : {};
                })
                .catch((error) => {
                });

            await db.models.CategoryDetail.create(categoryDetailsData)
                .then((data) => {
                    response.categoryDetails = data
                    res.status(201).json(response);
                })
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });
            return;
        } else {
            //Create a new category
            let categoryMaxId = await db.models.Categories.max('id') || 0;

            const categoryData = {
                id: req.body.id || categoryMaxId + 1,
                gallery_id: req.body.gallery_id,
                category_icon: req.body.category_icon,
                parent_id: req.body.parent_id,
                category_slug: req.body.category_slug,
                sort_order: req.body.sort_order,
                created_by: req.body.created_by,
                updated_by: req.body.updated_by,
                deleted_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            }

            //Create a new Category Details
            const categoryDetailsData = {
                id: max_id + 1,
                category_name: req.body.category_name,
                language_id: req.body.language_id,
                description: req.body.description,
                category_id: req.body.id || categoryMaxId + 1,
            }

            if (!categoryDetailsData.language_id) {
                return res.status(409).json({ error: 'language_id is required' });
            }

            console.log(categoryMaxId, max_id, "MAX ID");
            const existinglanguageId = await db.models.CategoryDetail.findOne({ where: { language_id: req.body.language_id, category_id: (req.body.id || categoryMaxId + 1) } }).then((data) => {
                return data;
            });
            if (existinglanguageId) {
                return res.status(409).json({ error: 'language already exist for this category' });
            }

            const response = {}
            await db.models.Categories.create(categoryData)
                .then(async (data) => {
                    response.category = data;
                    categoryDetailsData.category_id = data.id
                    await db.models.CategoryDetail.create(categoryDetailsData)
                        .then((data) => {
                            response.CategoryDetail = data
                            res.status(201).json(response)
                        })
                })
                .catch((error) => {
                    res.status(500).send({ message: error.message });
                });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
        return;
    }
};

async function createCategoryDetailById(req, res) {
    const id = Number(req.query.id);
    const isExistingCategory = db.models.Categories.findOne({ where: { id } }).then((data) => {
        return data;
    });
    //If Category already exist insert only category details
    if (isExistingCategory) {
        let max_id = await db.models.CategoryDetail.max('id') || 0;
        const categoryDetailsData = {
            id: max_id + 1,
            category_name: req.body.category_name,
            language_id: req.body.language_id,
            description: req.body.description,
            category_id: id
        }

        if (!categoryDetailsData.language_id) {
            return res.status(409).json({ error: 'language_id is required' });
        }

        const existinglanguageId = await db.models.CategoryDetail.findOne({ where: { language_id: req.body.language_id, category_id: id } })
            .then((data) => {
                return data;
            });
        if (existinglanguageId) {
            return res.status(409).json({ error: 'language already exist for this category' });
        }

        db.models.CategoryDetail.create(categoryDetailsData)
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
        return;
    } else {
        res.status(400).json({ message: "There is no id specified to update" })
        return;
    }
};

async function getAllCategoriesData(req, res) {
    let conditions = {};
    try {
        const wss = req.wssManager.wss;
        let limit = req.query && req.query.limit ? Number(req.query.limit) : 2;
        let batchSize = req.query && req.query.batchSize ? Number(req.query.batchSize) : 2;
        const id = Number(req.query.id);
        if (id) {
            conditions.id = id;
        }
        const data = await db.models.Categories.findAll({
            include: [{ model: db.models.CategoryDetail, as: "category_details" }], limit, where: conditions
        }).then((data) => {
            return data;
        });
        res.status(200).json(data);
        const otherProps = {}
        otherProps['include'] = [{ model: db.models.CategoryDetail, as: "category_details" }]
        fetchAllDataInChunks(db.models.Categories, wss, limit, batchSize, conditions, otherProps)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function updateCategoryDetail(req, res) {
    const id = Number(req.query.id);
    try {
        // Find the record by ID
        const record = await db.models.CategoryDetail.findByPk(id)
            .then((data) => {
                return data;
            });

        if (!record) {
            return res.status(404).json({ error: 'Record not found' });
        }

        const categoryDetailsData = {
            category_name: req.body.category_name,
            language_id: req.body.language_id,
            description: req.body.description,
            category_id: req.body.category_id
        }

        const isExistingLanguageId = await db.models.CategoryDetail.findAll({ where: { language_id: req.body.language_id, category_id: req.body.category_id } })
            .then((data) => {
                return data;
            });

        if (isExistingLanguageId.length > 1) {
            return res.status(409).json({ error: 'language already exist for this category' });
        }

        // Update the record with the new data
        await db.models.CategoryDetail.update(categoryDetailsData, { where: { id }, })
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function updateCategory(req, res) {
    const id = Number(req.query.id);
    console.log(id);
    try {
        // Find the record by ID
        const record = await db.models.Categories.findByPk(id)
            .then((data) => {
                return data;
            });

        if (!record) {
            return res.status(404).json({ error: 'Record not found' });
        }

        const categoryData = {
            gallery_id: req.body.gallery_id,
            category_icon: req.body.category_icon,
            parent_id: req.body.parent_id,
            category_slug: req.body.category_slug,
            sort_order: req.body.sort_order,
            updated_by: req.body.updated_by,
            updated_at: new Date(),
        }

        // Update the record with the new data
        await db.models.Categories.update(categoryData, { where: { id }, })
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function deleteCategory(req, res) {
    // Extract conditions from query parameters
    const conditions = {};
    if (req.query.id) {
        conditions.id = req.query.id;
    }
    try {
        if (Object.keys(conditions).length === 0) {
            res.status(400).json({ message: "There is no id specified to delete" })
            return;
        }
        const deletedCount = await db.models.Categories.destroy({
            where: conditions,
        });
        res.json({ message: `${deletedCount} user requests deleted` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user requests" });
    }
};

module.exports = {
    createCategory,
    createCategoryDetailById,
    getAllCategoriesData,
    updateCategoryDetail,
    updateCategory,
    deleteCategory
};