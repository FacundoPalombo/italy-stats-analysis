const cheerio = require("cheerio");

const clearScriptsFromHtml = function (req, res, next) {
  const html = res.locals.comuneData;
  const $ = cheerio.load(html);

  $("script").remove();
  console.log($.html());
  res.locals.comuneData = $.html();
  next();
};

module.exports = {
  clearScriptsFromHtml,
};
