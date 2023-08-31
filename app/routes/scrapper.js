const router = require("express").Router();

const { loadCity, loadProvince } = require("../loaders/scrapper");
const { sendHtml } = require("../middlewares/sendHtml");
const { sanitizeParams } = require("../middlewares/sanitizeParams");
const { clearScriptsFromHtml } = require("../middlewares/clearScripts");
const { scrapProvince, scrapCity } = require("../middlewares/scrapLoader");

router.get(
  "/:provinceId/:cityId",
  sanitizeParams,
  loadCity,
  clearScriptsFromHtml,
  scrapCity,
  sendHtml
);

router.get(
  "/:provinceId",
  sanitizeParams,
  loadProvince,
  clearScriptsFromHtml,
  scrapProvince,
  sendHtml
);

module.exports = router;
