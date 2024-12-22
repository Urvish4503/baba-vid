import { IRouter, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router: IRouter = Router();

router.get("/ping", (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "pong"
    });
});

export default router;
