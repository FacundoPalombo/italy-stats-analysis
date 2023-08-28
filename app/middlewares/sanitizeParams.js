const { ensureThreeZeros } = require("../utils/ensureThreeZeros");

const sanitizeParams = (req, res, next) => {
  if (req?.params?.provinceId)
    req.params.provinceId = ensureThreeZeros(req.params.provinceId);
  if (req?.params?.cityId)
    req.params.cityId = ensureThreeZeros(req.params.cityId);
  next();
};

module.exports = { sanitizeParams };
