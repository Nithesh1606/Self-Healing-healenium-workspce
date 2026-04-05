const LoginPage = require("../pageobjects/login.page");

const loginPage = new LoginPage();

describe('My Login application', () => {
    // let driver;

    // before(async function () {
    //     let opts = new chrome.Options();
    //     opts.addArguments('--no-sandbox')
    //     opts.addArguments('--disable-dev-shm-usage')
    //     driver = await new webdriver.Builder()
    //         .withCapabilities(webdriver.Capabilities.chrome())
    //         .usingServer('http://localhost:8085')
    //         .setChromeOptions(opts)
    //         .build();

    //     // testEnv = await new Test_env_page(driver);
    //     // callBack = await new Callback_page(driver);
    // })

    it('should login with valid credentials', async () => {
        await loginPage.open()

        await loginPage.fillForm()
    })
})


