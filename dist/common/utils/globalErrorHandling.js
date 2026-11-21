"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandling = exports.AppError = void 0;
class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode = 500) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const globalErrorHandling = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message,
        statusCode,
        stack: err.stack,
    });
};
exports.globalErrorHandling = globalErrorHandling;
