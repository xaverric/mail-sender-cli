const nodemailer = require("nodemailer");
const {CONSOLE_LOG} = require("../../logger/logger");
const { currentDateTime } = require("../../util/date-helper");

const sendEmailNotification = async (emailContent, configuration) => {
    let transporter = nodemailer.createTransport(configuration.notifications.email.transportsConfiguration);

    for (const recipient of configuration.notifications.email.recipients) {
        CONSOLE_LOG.info(`Sending email notification to recipient: ${recipient}`);
        let info = await transporter.sendMail({
            // TODO parametrize
            from: '',
            to: recipient,
            // TODO parametrize
            subject: ` ${currentDateTime()}`,
            html: emailContent
        });
        CONSOLE_LOG.info(`Email sent to ${recipient} - ID: ${info.messageId}`);
    }

}

module.exports = {
    sendEmailNotification
}