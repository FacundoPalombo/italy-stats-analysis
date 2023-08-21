function sendHtml(req, res, next) {
  console.log(res.locals.comuneData);
  res.send(res.locals.comuneData);
}

module.exports = { sendHtml };
