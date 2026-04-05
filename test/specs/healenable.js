const HealEnablePage = require("../pageobjects/healenable.page");

const healEnablePage = new HealEnablePage();

describe('Enable the heal option', () => {
    it('should enable the heal option ', async () => {

        await healEnablePage.getSheetDataAndPerformHeal();
    });
});