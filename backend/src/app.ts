import express from 'express';

import dotenv from 'dotenv';
import logger from "morgan";
import bodyParser from "body-parser";
import path from "path";
import expressValidator from "express-validator";
import flash from "express-flash";
import session from "express-session";
import compression from "compression";

import * as homeController from './controllers/home';
import * as contactController from './controllers/contact';

dotenv.config({path: ".env.example"});

const app = express();
app.use(expressValidator());
// morgan logger
app.use(logger("dev"));

app.use(compression());

app.set("views", path.join(__dirname, "../views"));

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public"), {maxAge: 31557600000}));


app.use(flash());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", homeController.index);
app.get("/contact", contactController.getContact);
app.post("/contact", contactController.postContact);
module.exports = app;