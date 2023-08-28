const router = require("express").Router();

const { loadCity, loadProvince } = require("../loaders/scrapper");
const { sendHtml } = require("../middlewares/sendHtml");

router.get("/:provinceId/:cityId", loadCity, sendHtml);
router.get("/:provinceId", loadProvince, sendHtml);

module.exports = router;
