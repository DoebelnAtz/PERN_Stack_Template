const accessLogger = require('../logger').accessLogger;

const logIncomingRequests = (req, res, next) => {
    if (req.method === "GET")
        accessLogger.info(`User: ${req.decoded && req.decoded.username} | Method: ${req.method} | To: ${req.path} | Query: ${JSON.stringify(req.query)}`);
    else {
        accessLogger.info(`User: ${req.decoded && req.decoded.username} | Method: ${req.method} | To: ${req.path} | Body: ${JSON.stringify(req.body)}`);
    }
    next();
};