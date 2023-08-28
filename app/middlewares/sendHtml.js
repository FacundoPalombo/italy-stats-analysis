function sendHtml(req, res, next) {
  res.send(res.locals.comuneData);
}

module.exports = { sendHtml };
