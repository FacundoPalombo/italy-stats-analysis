const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const baseRouter = require("./app/routes");
const path = require("path");

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
app.use("/api", baseRouter);

app.listen(3000, () => {
  console.log("Server listening on localhost:3000");
});
