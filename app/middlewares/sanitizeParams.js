const createError = require("http-errors");

const { addZeros } = require("../utils/addZeros");

const sanitizeParams = (req, res, next) => {
  if (req.params.provinceId) {
    try {
      req.params.provinceId = addZeros(req.params.provinceId, 3);
    } catch (error) {
      return next(createError(400, error.message));
    }
  }
  if (req.params.cityId) {
    try {
      req.params.cityId = addZeros(req.params.cityId, 3);
    } catch (error) {
      return next(createError(400, error.message));
    }
  }
  next();
};

module.exports = { sanitizeParams };
