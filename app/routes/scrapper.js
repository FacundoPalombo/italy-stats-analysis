const router = require("express").Router();

const { loadCity, loadProvince } = require("../loaders/scrapper");
const { sendHtml } = require("../middlewares/sendHtml");
const { sanitizeParams } = require("../middlewares/sanitizeParams");

router.get("/:provinceId/:cityId", sanitizeParams, loadCity, sendHtml);
router.get("/:provinceId", sanitizeParams, loadProvince, sendHtml);

module.exports = router;
