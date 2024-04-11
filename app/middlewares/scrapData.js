const { saveData } = require("../services/saveData");

const scrapProvince = (req, res, next) => {
  if (res.locals.isAlreadyScrapped) {
    console.log(`File already was scrapped, returning data from local`);
    next();
  }

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
  if (res.locals.isAlreadyScrapped) {
    console.log(`File already was scrapped, returning data from local`);

    next();
  }
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
  if (res.locals.isAlreadyScrapped) {
    console.log(`File already was scrapped, returning data from local`);

    next();
  }
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
  if (res.locals.isAlreadyScrapped) {
    console.log(`File already was scrapped, returning data from local`);

    next();
  }
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
