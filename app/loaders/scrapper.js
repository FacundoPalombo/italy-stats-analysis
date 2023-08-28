const fs = require("fs");
const path = require("path");

const { getCity, getProvince } = require("../services/scrapper");
const ensureDirectoryExistence = require("../utils/ensurePathExists");

const loadProvince = async (req, res, next) => {
  const { provinceId } = req.params;

  console.info(`Saving comune /${provinceId} `);

  const comunePage = await getProvince({ provinceId });

  const filePath = path.join(
    __dirname,
    "../../scrapped-data/html/comune/",
    provinceId,
    "index.html"
  );

  ensureDirectoryExistence(filePath);

  fs.writeFileSync(filePath, comunePage.data);

  res.locals.comuneData = comunePage.data;
  next();
};

const loadCity = async (req, res, next) => {
  const { provinceId, cityId } = req.params;

  console.info(`Saving comune /${provinceId}/${cityId} `);

  const comunePage = await getCity({ provinceId, cityId });

  const filePath = path.join(
    __dirname,
    "../../scrapped-data/html/comune/",
    provinceId,
    cityId,
    "index.html"
  );

  ensureDirectoryExistence(filePath);

  fs.writeFileSync(filePath, comunePage.data);

  res.locals.comuneData = comunePage.data;
  next();
};

module.exports = { loadCity, loadProvince };
