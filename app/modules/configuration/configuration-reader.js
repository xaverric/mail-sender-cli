const fs = require("fs-extra");
const path = require("path");
const os = require("os");

const CONFIG_DEFAULT_PATH = path.join(os.homedir(), '.mail-sender-cli', 'config.js');

const readConfiguration = async cmdArgs => {
    let configuration;

    if (cmdArgs.config) {
        configuration = await loadFile(path.resolve(cmdArgs.config));
    } else {
        configuration = await loadFile(CONFIG_DEFAULT_PATH);
    }

    return configuration;
};

const loadFile = async path => {
    let file = require(path);
    if (typeof file === "function") {
      let loadedFile = await file();
      return loadedFile;
    }
    return file;
}

module.exports = {
    readConfiguration
}


