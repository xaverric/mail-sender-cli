const nodemailer = require("nodemailer");
const {CONSOLE_LOG} = require("../../logger/logger");
const {currentDateTime} = require("../../util/date-helper");

const sendEmailNotification = async (emailContent, configuration, subject, from, attachments) => {
    let transporter = nodemailer.createTransport(configuration.notifications.email.transportsConfiguration);

    for (const recipient of configuration.notifications.email.recipients) {
        CONSOLE_LOG.info(`Sending email notification to recipient: ${recipient}`);
        let info = await transporter.sendMail({
            from: `"${from}" <noreply@mail-sender-cli.com>`,
            to: recipient,
            subject: `${subject} - ${currentDateTime()}`,
            html: emailContent,
            attachments: attachments?.map(item => {
                return {
                    path: item
                }
            })
        });
        CONSOLE_LOG.info(`Email sent to ${recipient} - ID: ${info.messageId}`);
    }

}

module.exports = {
    sendEmailNotification
}