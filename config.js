const TRANSPORT_CONFIGURATION = {
    "auth": {
        "pass": "UdnFR55p6",
        "user": "15-9032-1"
    },
    "host": "smtp.plus4u.net",
    "port": 465,
    "secure": true
};

module.exports = {
    notifications: {
        email: {
            transportsConfiguration: TRANSPORT_CONFIGURATION,
            recipients: [
                "daniel.jilek@unicorn.com"
            ]
        }
    }
}