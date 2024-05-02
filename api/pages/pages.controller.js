const { db, initializeDb } = require('../../_helpers/db');
const { isEntryPresentForLanguage } = require('../../_util/index');
initializeDb();

async function getAllPages(req, res) {
    try {
        await db.models.Pages.findAll()
            .then((data) => {
                res.status(200).json(data);
                return;
            });

    } catch (err) {
        res.status(500).send({ error: error.message });
    }
};

async function getAllPageDetails(req, res) {
    try {
        await db.models.PageDetail.findAll()
            .then(data => {
                res.status(200).json(data);
                return;
            })
    } catch (error) {
        res.status(500).json({ error: error.message });
        return;
    }
}

async function getPageDetailsByPageId(req, res) {
    if (!req.body.page_id || !req.body.language_id) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    try {
        const page_id = req.body.page_id.typeOf === 'number' ? req.body.page_id : parseInt(req.body.page_id);
        const language_id = req.body.language_id.typeOf === 'number' ? req.body.language_id : parseInt(req.body.language_id);
        await db.models.PageDetail.findAll({
            where: {
                page_id: page_id,
                language_id: language_id
            }
        })
            .then(data => {
                res.status(200).json(data);
                return;
            })
    } catch (error) {
        res.status(500).json({ error: error.message });
        return;
    }
}

async function createPage(req, res) {
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }

    try {
        const id = await db.models.Pages.max('id').then(data => data ? data + 1 : 1).catch((error) => res.status(500).send(error));
        const slug = req.body.slug.typeOf === 'string' ? req.body.slug : req.body.slug.toString();
        const created_by = req.body.created_by.typeOf === 'number' ? req.body.created_by : parseInt(req.body.created_by);
        const date = new Date();

        const newPage = {
            id: id,
            slug: slug,
            created_by: created_by,
            updated_by: null,
            deleted_at: null,
            created_at: date,
            updated_at: date
        };

        await db.models.Pages.create(newPage)
            .then(data => {
                res.status(200).json(data)
                return;
            })
            .catch((error) => res.status(500).send(error));
    } catch (error) {
        res.status(500).send({ error: error.message });
        return;
    }

}

async function createPageDetails(req, res) {
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    try {
        if (await isEntryPresentForLanguage(db.models.PageDetail, req.body.language_id, { page_id: req.body.page_id })) {
            res.status(409).json({ message: "language entry exists for this page" });
            return;
        }

        const id = await db.models.PageDetail.max('id').then(data => data ? data + 1 : 1).catch((error) => res.status(500).send(error));
        const page_type = req.body.page_type.typeOf === 'string' ? req.body.page_type : req.body.page_type.toString();
        const title = req.body.title.typeOf === 'string' ? req.body.title : req.body.title.toString();
        const description = req.body.description.typeOf === 'string' ? req.body.description : req.body.description.toString();
        const page_id = req.body.page_id.typeOf === 'number' ? req.body.page_id : parseInt(req.body.page_id);
        const language_id = req.body.language_id.typeOf === 'number' ? req.body.language_id : parseInt(req.body.language_id);
        const date = new Date();

        const newPageDetail = {
            id: id,
            page_type: page_type,
            title: title,
            description: description,
            language_id: language_id,
            page_id: page_id,
            created_at: date,
            updated_at: date
        };

        await db.models.PageDetail.create(newPageDetail)
            .then(data => {
                res.status(200).json(data);
                return;
            })
            .catch((error) => res.status(500).send(error));
    } catch (error) {
        res.status(500).send({ error: error.message });
        return;
    }
}

async function updatePageDetails(req, res) {
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    try {
        const pageDetailId = req.body.id.typeOf === 'number' ? req.body.id : parseInt(req.body.id);
        const language_id = req.body.language_id.typeOf === 'number' ? req.body.language_id : parseInt(req.body.language_id);

        await db.models.PageDetail.findOne({
            where: {
                id: pageDetailId,
                language_id: language_id
            }
        }).then(async (data) => {
            if (!data) {
                res.status(404).json({ message: "Page detail not found" });
                return;
            }

            const page_type = req.body.page_type.typeOf === 'string' ? req.body.page_type : req.body.page_type.toString();
            const title = req.body.title.typeOf === 'string' ? req.body.title : req.body.title.toString();
            const description = req.body.description.typeOf === 'string' ? req.body.description : req.body.description.toString();

            const updatedPageDetail = {
                page_type: page_type,
                title: title,
                description: description,
                language_id: language_id,
                updated_at: new Date()
            };

            await db.models.PageDetail.update(updatedPageDetail, {
                where: {
                    id: pageDetailId,
                    language_id: language_id
                }
            })
                .then(async (data) => {
                    if (data[0] === 1) {
                        await db.models.PageDetail.findOne(
                            {
                                where: {
                                    id: pageDetailId
                                }
                            }
                        ).then((data) => {
                            res.status(200).json(data);
                            return;
                        })
                    }
                    return;
                })
                .catch((error) => res.status(500).send(error));
        })
            .catch((error) => res.status(500).send(error));

    } catch (error) {
        res.status(500).send({ error: error.message });
        return;
    }
}

async function deletePage(req, res) {
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    try {

        const page_id = req.body.page_id.typeOf === 'number' ? req.body.page_id : parseInt(req.body.page_id);

        await db.models.PageDetail.destroy({
            where: {
                page_id: page_id
            }
        })
            .then(async (data) => {
                await db.models.Pages.destroy({
                    where: {
                        id: page_id
                    }
                }).then(data => {
                    res.status(200).json({ message: "Page and associated page details deleted successfully." });
                    return;
                })
            })
    } catch (error) {
        res.status(500).json({ error: error.message });
        return;
    }
}

module.exports = {
    getAllPages,
    createPage,
    createPageDetails,
    updatePageDetails,
    getPageDetailsByPageId,
    deletePage,
    getAllPageDetails
};