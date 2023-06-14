const fs = require("fs-extra");
const path = require("path");

const readData = cmdArgs => {
    return fs.readFileSync(path.resolve(cmdArgs.textContentFilePath), "utf-8");
};

module.exports = {
    readData
}