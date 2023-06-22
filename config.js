const TRANSPORT_CONFIGURATION = {
    "auth": {
        "pass": "...",
        "user": "..."
    },
    "host": "...",
    "port": 465,
    "secure": true
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
