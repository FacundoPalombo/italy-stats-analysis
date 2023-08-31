const router = require("express").Router();

const { loadCity, loadProvince } = require("../loaders/scrapper");
const { sendHtml } = require("../middlewares/sendHtml");
const { sanitizeParams } = require("../middlewares/sanitizeParams");
const { clearScriptsFromHtml } = require("../middlewares/clearScripts");

router.get(
  "/:provinceId/:cityId",
  sanitizeParams,
  loadCity,
  clearScriptsFromHtml,
  sendHtml
);
router.get(
  "/:provinceId",
  sanitizeParams,
  loadProvince,
  clearScriptsFromHtml,
  sendHtml
);

module.exports = router;
