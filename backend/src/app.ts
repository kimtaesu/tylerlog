import * as express from 'express';
import * as homeController from './controllers/home';
import * as contactController from './controllers/contact';
import * as dotenv from 'dotenv';
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as expressValidator from "express-validator";
import * as flash from "express-flash";
import * as session from "express-session";

dotenv.config({path: ".env.example"});

const app = express();

// morgan logger
app.use(logger("dev"));

app.set("views", path.join(__dirname, "../views"));

app.set("view engine", "pug");

app.use(expressValidator());


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

module.exports = app;