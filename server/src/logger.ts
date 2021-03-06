const { createLogger, transports, format } = require('winston');

export const accessLogger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        format.printf((info: any) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: './logs/access.log',
            json: false,
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new transports.Console(),
    ]
});

export const errorLogger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        format.printf((info: any) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: './logs/error.log',
            json: false,
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new transports.Console(),
    ]
});

module.exports = {accessLogger: accessLogger, errorLogger: errorLogger};