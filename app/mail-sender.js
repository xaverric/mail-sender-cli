const {CONSOLE_LOG} = require("./modules/logger/logger");
const {readConfiguration} = require("./modules/configuration/configuration-reader");
const {sendEmailNotification} = require("./modules/mail/sender/mail-sender");
const packageJson = require("../package.json");
const { buildEmailHtmlContent } = require("./modules/mail/template/email-html-content-builder");
const { readData } = require("./modules/configuration/data-reader");

const send = async (cmdArgs) => {
    const configuration = await readConfiguration(cmdArgs);
    const textDataContent = readData(cmdArgs);
    const emailHtmlContent = buildEmailHtmlContent({textDataContent})
    await sendEmailNotification(emailHtmlContent, configuration);
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