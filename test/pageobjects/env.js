const dotenv = require('dotenv');

class Env {

    EMAIL = process.env.EMAIL
    SOFT_EMAIL = process.env.SOFT_EMAIL
    SOFT_TO_EMAIL = process.env.SOFT_TO_EMAIL
    SOFT_CC_EMAIL = process.env.SOFT_CC_EMAIL
    SOFT_EMAIL_PASSWORD = Buffer.from(process.env.SOFT_EMAIL_PASSWORD, 'base64').toString('ascii');
    EMAIL_PASSWORD = Buffer.from(process.env.EMAIL_PASSWORD, 'base64').toString('ascii');
    // SUITE_NAME = process.env.SUITE_NAME
    // TRIGGERED_BY  = process.env.TRIGGERED_BY
    // DEFUALT_USER_NAME = process.env.DEFUALT_USER_NAME
    // DEFUALT_PASSWORD = process.env.DEFUALT_PASSWORD
}

module.exports = new Env();