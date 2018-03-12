import {NextFunction, Request, Response} from 'express';
import {default as Book} from '../model/book';
import {WriteError} from 'mongodb';

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
    res.render("home", {
        title: "Home"
    });
};
