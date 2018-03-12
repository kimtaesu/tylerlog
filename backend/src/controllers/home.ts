import {NextFunction, Request, Response} from "express";
import {default as Book} from "../model/book";
import {WriteError} from "mongodb";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
    res.send("Hellow");
};
export let test = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    res.send("test!");
};
