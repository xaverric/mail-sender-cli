const {CONSOLE_LOG} = require("./modules/logger/logger");
const {readConfiguration} = require("./modules/configuration/configuration-reader");
const {sendEmailNotification} = require("./modules/mail/sender/mail-sender");
const packageJson = require("../package.json");
const {buildEmailHtmlContent} = require("./modules/mail/template/email-html-content-builder");
const {readData} = require("./modules/configuration/data-reader");

const send = async (cmdArgs) => {
    const configuration = await readConfiguration(cmdArgs);
    let textDataContent = cmdArgs.textContent ? cmdArgs.textContent : readData(cmdArgs);
    const emailHtmlContent = buildEmailHtmlContent({textDataContent, subject: cmdArgs.subject})
    await sendEmailNotification(emailHtmlContent, configuration, cmdArgs.subject, cmdArgs.from);
}

const help = usage => {
    CONSOLE_LOG.debug(usage);
}

const version = () => {
    CONSOLE_LOG.debug(packageJson.version);
}

module.exports = {
    send,
    help,
    version
}