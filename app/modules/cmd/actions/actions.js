const { cmdArguments } = require('../cli/arguments');
const { usage } = require('../cli/usage');
const {send, version, help} = require('../../../mail-sender');

const COMMANDS = {
  COMMAND_SEND: 'send',
  COMMAND_HELP: 'help',
  COMMAND_VERSION: 'version'
};

const actions = {
  showHelp: {
    condition: () => handleCondition(cmdArguments.command === COMMANDS.COMMAND_HELP || cmdArguments.help || Object.keys(cmdArguments).length === 0),
    action: async () => await help(usage)
  },
  runNotify: {
    condition: () => handleCondition(cmdArguments.command === COMMANDS.COMMAND_SEND),
    action: async () => await send(cmdArguments)
  },
  showVersion: {
    condition: () => handleCondition(cmdArguments.command === COMMANDS.COMMAND_VERSION),
    action: async () => await version(cmdArguments)
  }
};

const handleCondition = (condition) => {
  if (_isKnownAction()) {
    return condition;
  }
};

const _isKnownAction = () => !cmdArguments._unknown;

module.exports = {
  actions,
  COMMANDS
};
