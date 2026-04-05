const Message = require("../mail/message");
const sendEmail = require("../mail/sendmail");
const HomePage = require("./homepage");

class CartPage extends HomePage {

    constructor(browser) {
        super(browser);
    }

    message = new Message();

    get emailInput() {
        return this.byName('input', 'email');
    }

    get passwordInput() {
        return this.byName('input', 'password');
    }

    get addressInput() {
        return this.byName('input', 'address');
    }

    get cityInput() {
        return this.byName('input', 'city');
    }

    get zipInput() {
        return this.byName('input', 'zip');
    }

    get checkoutButton() {
        return this.byText('button', 'Check out');
    }

    get successMessage() {
        return this.byText('div', 'Form is valid. Proceed with checkout.');
    }

    get productWrapper() {
        return $('//div[@class="productsWrapper"]');
    }

    get customCardForEachProduct() {
        return $('//div[@class="custom-card"]');
    }

    get customCard() {
        return $$('//div[@class="custom-card"]');
    }

    async fillFormAndSubmit(email, password, address, city, zip) {
        await this.clickCartButton();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.addressInput.setValue(address);
        await this.cityInput.setValue(city);
        await this.zipInput.setValue(zip);
        await this.checkoutButton.click();
    }

    async getSuccessMessage() {
        await this.successMessage.getText();
    }

    async sendHealReportInEmail() {
        const subject = this.message.EMAIL_SUBJECT_OF_HEALENIUM;
        // Email body content
        const emailBody = `${this.message.EMAIL_BODY}\n Report Link: ${this.message.HEALENIUM_REPORT_LINK}\n Thanks,`;
        await sendEmail(subject, emailBody);
    }
}

module.exports = CartPage;
