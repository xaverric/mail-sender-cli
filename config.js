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