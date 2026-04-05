class Message {
    constructor() {
        this.date = new Date().toLocaleString();
        this.currentTime = new Date().toLocaleString();
        this.EMAIL_SUBJECT_OF_HEALENIUM = "Healenium Test Report";
        this.HEALENIUM_REPORT_LINK = "http://192.168.29.100:7878/healenium/report/";
        this.EMAIL_BODY = `Hi,

This report details the results of the automated tests run on HappyKart WebApplication on [${this.date}]. 
The aim was to ensure the proper functionality of the system and identify any defects.

Key Metrics
Total Test Cases - 3
Passed - 3
Failed - 0

Test Environment
Operating System - Ubuntu 20.04.6 LTS
Automation Tool - WebDriverIO
Browser - Chrome

For detailed test results, please visit the following link: ${this.HEALENIUM_REPORT_LINK}`;
    }
}

module.exports = Message;

// Testing the Message class
const msg = new Message();
console.log(msg.EMAIL_BODY);
console.log(`Current Time: ${msg.currentTime}`);
