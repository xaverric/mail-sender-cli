# mail-sender-cli

## Installation

```
npm install -g mail-sender-cli
```
    
## Usage

```
mail-sender-cli <command> <command parameters>
```

## Commands

* send
* help
* version

## Parameters

```
  --command string               send, help, version commands. All these can be
                                 used as default commands without providing
                                 --command argument.
  -c, --config string            File path to the configuration object.
  --textContentFilePath string   Path to the file with text content to be sent
                                 via e-mail to all recipients.
  -t, --textContent string       Text content to be sent via e-mail to all
                                 recipients.
  -s, --subject string           Subject value to be used in email. Field is
                                 mandatory.
  -f, --from string              From value to be used as an sender of an
                                 email. Field is mandatory.

```

## Configuration

### config.js

```js
const TRANSPORT_CONFIGURATION = {
    host: "",
    port: 1234,
    secure: true,
    auth: {
        user: "",
        pass: ""
    }
};

module.exports = {
    notifications: {
        email: {
            transportsConfiguration: TRANSPORT_CONFIGURATION,
            recipients: [
                ""
            ]
        }
    }
}
```

## Logs

logs are automatically stored to the ```%HOME%/.mail-sender-cli/logs``` folder