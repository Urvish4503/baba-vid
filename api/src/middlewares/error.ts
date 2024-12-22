import { NextFunction } from "express";
import { APIError } from "../errors/error";

export const errorMiddleware: any = (error: APIError, req: Request, res: Response, next: NextFunction) => {
    console.log("Error caught by middleware");

    // @ts-ignore
    res.status(error.statusCode).json({
        message: error.message,
        error: error,
    })
}