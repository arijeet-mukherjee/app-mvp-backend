const { func } = require('joi');
const { db, initializeDb } = require('../../_helpers/db');
const { fetchAllDataInChunks } = require('../../_util');
const { isEntryPresentForLanguage } = require('../../_util/index');
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
        let categoryDetailMaxId = await db.models.CategoryDetail.max('id') || 0;

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
                id: categoryDetailMaxId + 1,
                category_name: req.body.category_name,
                language_id: req.body.language_id,
                description: req.body.description,
                category_id: req.body.id
            }
            if (!categoryDetailsData.language_id) {
                return res.status(409).json({ error: 'language_id is required' });
            }

            if (await isEntryPresentForLanguage(db.models.CategoryDetail, req.body.language_id, { category_id: req.body.id })) {
                res.status(409).json({ message: "language entry exists for this Category" });
                return;
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
                id: categoryDetailMaxId + 1,
                category_name: req.body.category_name,
                language_id: req.body.language_id,
                description: req.body.description,
                category_id: req.body.id || categoryMaxId + 1,
            }

            if (!categoryDetailsData.language_id) {
                return res.status(409).json({ error: 'language_id is required' });
            }

            if (await isEntryPresentForLanguage(db.models.CategoryDetail, req.body.language_id, { category_id: (req.body.id || categoryMaxId + 1) })) {
                res.status(409).json({ message: "language entry exists for this Category" });
                return;
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
                    res.status(500).json({ message: error.message });
                });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

async function createCategoryDetailById(req, res) {
    const id = Number(req.query.id);
    const isExistingCategory = await db.models.Categories.findOne({ where: { id } })
        .then((data) => {
            return data;
        });
    //If Category already exist insert only category details
    if (isExistingCategory) {
        let categoryDetailMaxId = await db.models.CategoryDetail.max('id') || 0;
        const categoryDetailsData = {
            id: categoryDetailMaxId + 1,
            category_name: req.body.category_name,
            language_id: req.body.language_id,
            description: req.body.description,
            category_id: id
        }

        if (!categoryDetailsData.language_id) {
            return res.status(409).json({ error: 'language_id is required' });
        }

        if (await isEntryPresentForLanguage(db.models.CategoryDetail, req.body.language_id, { category_id: id })) {
            res.status(409).json({ message: "language entry exists for this Category" });
            return;
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
        fetchAllDataInChunks(db.models.Categories, wss, limit, batchSize, conditions, otherProps, "getAllCategoriesData")
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

        const isExistingCategory = await db.models.Categories.findOne({ where: { id: req.body.category_id } })
            .then((data) => {
                return data;
            })

        if (!isExistingCategory) {
            res.status(409).json({ message: "Category dose not exist" });
            return;
        }

        const categoryDetailsData = {
            category_name: req.body.category_name,
            language_id: req.body.language_id,
            description: req.body.description,
            category_id: req.body.category_id
        }

        if (await isEntryPresentForLanguage(db.models.CategoryDetail, req.body.language_id, { category_id: req.body.category_id })) {
            res.status(409).json({ message: "language entry exists for this Category" });
            return;
        }

        // Update the record with the new data
        await db.models.CategoryDetail.update(categoryDetailsData, { where: { id }, })
            .then(async (data) => {
                if (data[0] === 1) {
                    await db.models.CategoryDetail.findOne(
                        {
                            where: {
                                id
                            }
                        }
                    ).then((data) => {
                        res.status(200).json(data);
                        return;
                    })
                }
                return;
            })
            .catch((error) => res.status(500).json(error));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function updateCategoryDetailByCategoryIdAndLanguageId(req, res) {

    try {
        const category_id = Number(req.query.category_id);
        const language_id = Number(req.query.language_id);

        // Find the record by ID
        const record = await isEntryPresentForLanguage(db.models.CategoryDetail, language_id, { category_id: category_id })
            .then((data) => {
                return data;
            })
        if (!record) {
            res.status(409).json({ message: "Category or language dose not exist" });
            return;
        }


        const categoryDetailsData = {
            category_name: req.body.category_name,
            description: req.body.description
        }

        // Update the record with the new data
        await db.models.CategoryDetail.update(categoryDetailsData, { where: { language_id, category_id }, })
            .then(async (data) => {
                if (data[0] === 1) {
                    
                    await db.models.CategoryDetail.findOne(
                        {
                            where: {
                                language_id,
                                category_id
                            }
                        }
                    ).then((data) => {
                        res.status(200).json(data);
                        return;
                    })
                }
                return;
            })
            .catch((error) => res.status(500).json(error));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};



async function updateCategory(req, res) {
    const id = Number(req.query.id);
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
            .then(async (data) => {
                if (data[0] === 1) {
                    await db.models.Categories.findOne(
                        {
                            where: {
                                id: id
                            }
                        }
                    ).then((data) => {
                        res.status(200).json(data);
                        return;
                    })
                }
                return;
            })
            .catch((error) => res.status(500).json(error));
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
    updateCategoryDetailByCategoryIdAndLanguageId,
    updateCategory,
    deleteCategory
};