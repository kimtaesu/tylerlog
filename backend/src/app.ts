import * as express from 'express';
import * as homeController from './controllers/home';
import * as dotenv from 'dotenv';
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as path from "path";

dotenv.config({path: ".env.example"});

const app = express();

// morgan logger
app.use(logger("dev"))

app.set("views", path.join(__dirname, "../views"));

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", homeController.index);

module.exports = app;