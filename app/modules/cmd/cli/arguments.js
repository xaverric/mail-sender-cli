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
    description: 'Path to the file with text content to be sent via e-mail to all recipients.'
  },
  {
    name: 'textContent',
    alias: 't',
    type: String,
    description: 'Text content to be sent via e-mail to all recipients.'
  },
  {
    name: 'subject',
    alias: 's',
    type: String,
    description: 'Subject value to be used in email. Field is mandatory.'
  },
  {
    name: 'from',
    alias: 'f',
    type: String,
    description: 'From value to be used as an sender of an email. Field is mandatory.'
  },
  {
    name: 'attachments',
    multiple: true,
    alias: 'a',
    type: String,
    description: 'File paths to the attachments which should be sent via email.'
  }
];

const cmdArguments = commandLineArgs(cmdArgumentsDefinition, { stopAtFirstUnknown: true });

module.exports = {
  cmdArgumentsDefinition,
  cmdArguments
};
