import * as express from "express";
import * as homeController from "./controllers/home";
import * as dotenv from "dotenv";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

dotenv.config({path: ".env.example"});

const app = express();

// morgan logger
app.use(logger("dev"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", homeController.index);
app.post("/test", homeController.test);

module.exports = app;