const {compile} = require("../../util/handlebarsTemplateHelper");
const path = require("path");

const HTML_TEMPLATE_PATH = path.join(__dirname, "email-template.handlebars");

const buildEmailHtmlContent = (data) => {
    return compile(HTML_TEMPLATE_PATH, data);
}

module.exports = {
    buildEmailHtmlContent
}