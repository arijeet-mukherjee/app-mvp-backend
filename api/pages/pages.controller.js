const { db, initializeDb } = require('../../_helpers/db');
const { isEntryPresentForLanguage } = require('../../_util/index');
initializeDb();

//VALIDATE
//REMOVE CONSOLE LOG
//AUTOMATE ID
//UPDATE RESPONSE MANIPULATION
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
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    try {
        await db.models.PageDetail.findAll({
            where: {
                page_id: req.body.page_id,
                language_id: req.body.language_id
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
        const newPage = {
            id: req.body.id,
            slug: req.body.slug,
            created_by: req.body.created_by,
            updated_by: null,
            deleted_at: null,
            created_at: new Date(),
            updated_at: null
        };

        await db.models.Pages.create(newPage)
            .then(data => {
                console.log('Page details:', data);
                res.status(200).json(data)
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

        const newPageDetail = {
            id: req.body.id + 24,
            page_type: req.body.page_type,
            title: req.body.title,
            description: req.body.description,
            language_id: req.body.language_id,
            page_id: req.body.page_id,
            created_at: new Date(),
            updated_at: null
        };
        await db.models.PageDetail.create(newPageDetail)
            .then(data => {
                console.log('Page details:', data);
                res.status(200).json(data)
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
        const pageDetailId = req.body.id;
        await db.models.PageDetail.findAll({
            where: {
                id: req.body.id,
                language_id: req.body.language_id
            }
        }).then(async (data) => {
            console.log('Updated Page details:', data);
            if (data.length === 0) {
                res.status(404).json({ message: "Page detail not found" });
                return;
            }
            const updatedPageDetail = {
                page_type: req.body.page_type,
                title: req.body.title,
                description: req.body.description,
                language_id: req.body.language_id,
                updated_at: new Date()
            };

            await db.models.PageDetail.update(updatedPageDetail, {
                where: {
                    id: pageDetailId,
                    language_id: req.body.language_id
                }
            })
                .then(data => {
                    console.log('Updated Page details:', data);
                    res.status(200).json(data);
                    return;
                })
        })

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
        await db.models.PageDetail.destroy({
            where: {
                page_id: req.body.id
            }
        })
            .then(async (data) => {
                await db.models.Pages.destroy({
                    where: {
                        id: req.body.id
                    }
                }).then(data => {
                    res.status(200).json({ message: "Page and associated page details deleted successfully." });
                    return
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