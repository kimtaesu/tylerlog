import {Request, Response} from "express";
import {check} from "express-validator/check";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home"
  });
};
