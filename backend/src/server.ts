import errorHandler = require("errorhandler");

const app = require("./app");

const port: number = Number(process.env.PORT) || 3000;

app.use(errorHandler());

exports = app.listen(port, () => {
  console.log(`mongo db url ${process.env.MONGODB_URI}`);
  console.log(("  App is running at http://localhost:%d in"), port);
  console.log("  Press CTRL-C to stop\n");
});
