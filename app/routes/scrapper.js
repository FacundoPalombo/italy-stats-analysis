const router = require("express").Router();

const {
  loadCity,
  loadProvince,
  loadCityMap,
  loadProvinceMap,
} = require("../loaders/scrapper");
const { sendHtml } = require("../middlewares/sendHtml");
const { sanitizeParams } = require("../middlewares/sanitizeParams");
const { clearScriptsFromHtml } = require("../middlewares/clearScripts");

const {
  scrapProvince,
  scrapCity,
  scrapCityMap,
  scrapProvinceMap,
} = require("../middlewares/scrapData");

router.get(
  "/map/:provinceId",
  sanitizeParams,
  loadProvinceMap,
  clearScriptsFromHtml,
  scrapProvinceMap,
  sendHtml
);

router.get(
  "/map/:provinceId/:cityId",
  sanitizeParams,
  loadCityMap,
  clearScriptsFromHtml,
  scrapCityMap,
  sendHtml
);

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
