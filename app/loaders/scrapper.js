const {
  getCity,
  getProvince,
  getCityMap,
  getProvinceMap,
} = require("../services/scrapper");
const {
  checkIfFileWasScrapped,
} = require("../services/checkIfFileWasScrapped");

const loadProvince = async (req, res, next) => {
  const { provinceId } = req.params;

  const fileWasScrapped = checkIfFileWasScrapped({
    path: `${provinceId}`,
    file: "index",
  });

  if (fileWasScrapped) {
    console.log("File was scrapped, returning data from local");
    res.locals.comuneData = fileWasScrapped;
    res.locals.isAlreadyScrapped = true;
    next();
  } else {
    try {
      console.log("File is new, searching file on the internet");
      const comunePage = await getProvince({ provinceId });
      res.locals.comuneData = comunePage.data;
      next();
    } catch (err) {
      next(err);
    }
  }
};

const loadCity = async (req, res, next) => {
  const { provinceId, cityId } = req.params;

  const fileWasScrapped = checkIfFileWasScrapped({
    path: `${provinceId}/${cityId}`,
    file: "index",
  });

  if (fileWasScrapped) {
    console.log("File was scrapped, returning data from local");
    res.locals.comuneData = fileWasScrapped;
    res.locals.isAlreadyScrapped = true;
    next();
  } else {
    try {
      const comunePage = await getCity({ provinceId, cityId });
      res.locals.comuneData = comunePage.data;
      next();
    } catch (err) {
      next(err);
    }
  }
};

const loadProvinceMap = async (req, res, next) => {
  const { provinceId } = req.params;

  const fileWasScrapped = checkIfFileWasScrapped({
    path: `${provinceId}`,
    file: "mappa",
  });

  if (fileWasScrapped) {
    console.log("File was scrapped, returning data from local");
    res.locals.comuneData = fileWasScrapped;
    res.locals.isAlreadyScrapped = true;
    next();
  } else {
    try {
      const comunePage = await getProvinceMap({ provinceId });
      res.locals.comuneData = comunePage.data;
      next();
    } catch (err) {
      next(err);
    }
  }
};

const loadCityMap = async (req, res, next) => {
  const { provinceId, cityId } = req.params;

  const fileWasScrapped = checkIfFileWasScrapped({
    path: `${provinceId}/${cityId}`,
    file: "mappa",
  });

  if (fileWasScrapped) {
    console.log("File was scrapped, returning data from local");
    res.locals.comuneData = fileWasScrapped;
    res.locals.isAlreadyScrapped = true;
    next();
  } else {
    try {
      const comunePage = await getCityMap({ provinceId, cityId });
      res.locals.comuneData = comunePage.data;
      next();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = { loadCity, loadProvince, loadCityMap, loadProvinceMap };
