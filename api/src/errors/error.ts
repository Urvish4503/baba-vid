import { StatusCodes } from "http-status-codes";

export class APIError extends Error {
    message: string;
    errorCode: ErrorCodes;
    statusCode: StatusCodes;
    errors?: any;

    constructor(message: string, statusCode: StatusCodes, errorCode: ErrorCodes, errors?: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errorCode = errorCode;

        if (errors) this.errors = errors;
    }
}

export enum ErrorCodes {
    USERNAME_ALREADY_EXISTS = 1001,
    EMAIL_ALREADY_EXISTS = 1002,
    PASSWORD_NOT_STRONG = 1003,
    INVALID_EMAIL = 1004
}
