const createError = require("http-errors");

const { ensureThreeZeros } = require("../utils/ensureThreeZeros");

const sanitizeParams = (req, res, next) => {
  if (req?.params?.provinceId) {
    try {
      req.params.provinceId = ensureThreeZeros(req.params.provinceId);
    } catch (error) {
      return next(createError(400, error.message));
    }
  }
  if (req?.params?.cityId) {
    try {
      req.params.cityId = ensureThreeZeros(req.params.cityId);
    } catch (error) {
      return next(createError(400, error.message));
    }
  }
  next();
};

module.exports = { sanitizeParams };
