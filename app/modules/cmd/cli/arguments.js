const commandLineArgs = require('command-line-args');

const cmdArgumentsDefinition = [
  {
    name: 'command',
    defaultOption: true,
    type: String,
    description: 'send, help, version commands. All these can be used as default commands without providing --command argument.'
  },
  {
    name: 'config',
    alias: 'c',
    type: String,
    description: 'File path to the configuration object.'
  },
  {
    name: 'textContentFilePath',
    type: String,
    description: 'Path to the file with text content to be sent via e-mail to all recepients.'
  },
  {
    name: 'subject',
    type: String,
    description: 'tbd'
  }
];

const cmdArguments = commandLineArgs(cmdArgumentsDefinition, { stopAtFirstUnknown: true });

module.exports = {
  cmdArgumentsDefinition,
  cmdArguments
};
