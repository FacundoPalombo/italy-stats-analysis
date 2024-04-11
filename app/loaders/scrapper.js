const {
  getCity,
  getProvince,
  getCityMap,
  getProvinceMap,
} = require("../services/scrapper");

const loadProvince = async (req, res, next) => {
  const { provinceId } = req.params;

  try {
    const comunePage = await getProvince({ provinceId });
    res.locals.comuneData = comunePage.data;
    next();
  } catch (err) {
    next(err);
  }
};

const loadCity = async (req, res, next) => {
  const { provinceId, cityId } = req.params;

  try {
    const comunePage = await getCity({ provinceId, cityId });
    res.locals.comuneData = comunePage.data;
    next();
  } catch (err) {
    next(err);
  }
};

const loadProvinceMap = async (req, res, next) => {
  const { provinceId } = req.params;

  try {
    const comunePage = await getProvinceMap({ provinceId });
    res.locals.comuneData = comunePage.data;
    next();
  } catch (err) {
    next(err);
  }
};

const loadCityMap = async (req, res, next) => {
  const { provinceId, cityId } = req.params;

  try {
    const comunePage = await getCityMap({ provinceId, cityId });
    res.locals.comuneData = comunePage.data;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { loadCity, loadProvince, loadCityMap, loadProvinceMap };
