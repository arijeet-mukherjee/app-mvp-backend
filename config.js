require('dotenv').config();

// @#L$JHT2jgher3jkghn3RLHJK$TH
const config = {
    "database": {
        "host": `${process.env.DB_HOST || "localhost"}`,
        "port": `${process.env.DB_PORT || 3306}`,
        "user": `${process.env.DB_USER || "freedb_rootsecdesk"}`,
        "password": `${"e2hZ5mZdF6be6$*"}`,
        "database": `${process.env.DB_NAME || "mydb"}`
    }
};
module.exports = config;