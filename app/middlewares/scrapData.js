const { saveData } = require("../services/saveData");

const scrapProvince = (req, res, next) => {
  const { provinceId } = req.params;
  const data = res.locals.comuneData;

  saveData({
    data,
    url: `/${provinceId}`,
    resourceName: "index.html",
  });
  next();
};

const scrapCity = (req, res, next) => {
  const { cityId, provinceId } = req.params;
  const data = res.locals.comuneData;

  saveData({
    data,
    url: `/${provinceId}/${cityId}`,
    resourceName: "index.html",
  });
  next();
};

const scrapProvinceMap = (req, res, next) => {
  const { provinceId } = req.params;
  const data = res.locals.comuneData;

  saveData({
    data,
    url: `/${provinceId}`,
    resourceName: "mappa.html",
  });
  next();
};

const scrapCityMap = (req, res, next) => {
  const { cityId, provinceId } = req.params;
  const data = res.locals.comuneData;

  saveData({
    data,
    url: `/${provinceId}/${cityId}`,
    resourceName: "mappa.html",
  });
  next();
};

module.exports = {
  scrapProvince,
  scrapCity,
  scrapProvinceMap,
  scrapCityMap,
};
