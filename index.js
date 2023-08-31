const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const baseRouter = require("./app/routes");
const scrapperRouter = require("./app/routes/scrapper");

const ENV = process.env.NODE_ENV;

const isDev = ENV === "development";
const isProd = ENV === "production";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": [
          "'self'",
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
          "https://cdn.tailwindcss.com/",
        ],
        "style-src": [
          "'self'",
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
          "'unsafe-inline'",
          "https://cdn.tailwindcss.com/",
          "",
        ],
        "img-src": ["https://tile.openstreetmap.org/"],
      },
    },
  })
);
app.use(logger(isDev ? "dev" : "combined"));

app.use("/", express.static("public"));
app.use("/scrapper", scrapperRouter);
app.use("/api", baseRouter);

app.use((err, req, res, next) => {
  console.error(err.message, err.statusCode);
  if (err?.data?.status) {
    res
      .status(err.data.status)
      .send(
        `<div id="error">Error ${err.data.status} - ${err.data.message}</div>`
      );
  }
  if (err?.statusCode) {
    res
      .status(err.statusCode)
      .send(`<div id="error">Error ${err.statusCode} - ${err.message}</div>`);
  }
  if (err) {
    res.status(500).send('<div id="error">Error 500</div>');
  }
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000");
});
