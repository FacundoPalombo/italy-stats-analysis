const cheerio = require("cheerio");

const clearScriptsFromHtml = function (req, res, next) {
  const $ = cheerio.load(res.locals.comuneData);

  $("script").remove();
  res.locals.comuneData = $.html();
  next();
};

module.exports = {
  clearScriptsFromHtml,
};
