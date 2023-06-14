const commandLineUsage = require('command-line-usage');
const { cmdArgumentsDefinition } = require('./arguments.js');
const packageJson = require("../../../../package.json");

const usageDefinition = [
  {
    header: `mail-sender-cli @${packageJson.version}`,
    content: 'An amazing command line allowing you to send e-mails like a pro 🔥'
  },
  {
    header: 'Synopsis',
    content: '$mail-sender-cli <command> <command parameters>'
  },
  {
    header: 'Commands',
    content: [
      { name: 'help', summary: 'Display this help.' },
      { name: 'send', summary: 'Performs whole magic.' },
      { name: 'version', summary: 'Show tool version.' }
    ]
  },
  {
    header: 'Parameters',
    optionList: cmdArgumentsDefinition
  }
];

const usage = commandLineUsage(usageDefinition);

module.exports = {
  usage
};
