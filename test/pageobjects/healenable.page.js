const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const HomePage = require('./homepage');
const axios = require('axios').default; // Assuming axios is installed
require('dotenv').config();

const CREDENTIALS_PATH = path.resolve(__dirname, '..', '..', 'credentials.json');

const SPREADSHEET_ID = '1ejqUvGdbn0UwG5pRq6Za_g4k5cuYIr9Ck0n4WJgBOwM'; // Updated ID

class HealEnablePage extends HomePage {

    constructor(browser) {
        super(browser);
    }

    async performAutomation() {
        try {
            await this.healEnable();
            // Automation logic to click the checkbox using XPath
            // Example: await browser.url('http://localhost:7878/healenium/selectors/');
            // Example: await homePage.enable.click();
            console.log('Performing automation...');
        } catch (error) {
            console.error('Error performing automation:', error);
        }
    }

    async getSheetDataAndPerformHeal() {
        try {
            const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));

            const auth = new google.auth.GoogleAuth({
                credentials,
                scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: 'Sheet1'
            });

            const rows = response.data.values;

            if (rows.length) {
                console.log('Data from the sheet:');
                for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip headers
                    const row = rows[i];
                    console.log(row);

                    // Extract Old Value and New Value
                    const oldValue = String(row[2]); // Assuming Old Value is at index 2
                    const newValue = String(row[3]); // Assuming New Value is at index 3
                    console.log('Old Value:', oldValue);
                    console.log('New Value:', newValue);

                    // Compare Old Value with New Value
                    if (oldValue !== newValue) {
                        console.log(`Old Value (${oldValue}) is different from New Value (${newValue}). Performing automation...`);
                        // const healEnable = new HealEnablePage();
                        await this.performAutomation();
                    } else {
                        console.log('Old Value and New Value are the same. No automation needed.');
                    }
                }
            } else {
                console.log('No data found.');
            }
        } catch (err) {
            console.error('Error fetching data from the sheet:', err);
        }
    }
}

module.exports = HealEnablePage;

// getSheetData();
