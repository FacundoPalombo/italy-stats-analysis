const fs = require("fs");
const path = require("path");
const ensurePathExists = require("../utils/ensurePathExists");

const scrapCity = (req, res, next) => {
  const { provinceId, cityId } = req.params;
  try {
    console.info(`Saving scrapped data on ${provinceId}/${cityId}/`);

    const filePath = path.join(
      __dirname,
      "../../scrapped-data/html/",
      provinceId,
      cityId,
      "index.html"
    );

    ensurePathExists(filePath);

    fs.writeFileSync(filePath, res.locals.comuneData);
  } catch (error) {
    console.error(error);
  }

  next();
};

const scrapProvince = (req, res, next) => {
  const { provinceId } = req.params;
  try {
    console.info(`Saving scrapped data on ${provinceId}/`);

    const filePath = path.join(
      __dirname,
      "../../scrapped-data/html/",
      provinceId,
      "index.html"
    );

    ensurePathExists(filePath);

    fs.writeFileSync(filePath, res.locals.comuneData);
  } catch (error) {
    console.error(error);
  }

  next();
};

module.exports = {
  scrapCity,
  scrapProvince,
};
