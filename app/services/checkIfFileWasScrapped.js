const { existsSync, readFileSync } = require("fs");
const { resolve } = require("path");

function checkIfFileWasScrapped({ path, file }) {
  // first validation if file exists
  const filepath = resolve(
    __dirname,
    "../../scrapped-data/html/",
    `${path}/${file}.html`
  );
  const fileWasScrapped = existsSync(filepath);

  if (fileWasScrapped) {
    const comuneData = readFileSync(filepath).toString();
    return comuneData;
  }
  return false;
}

module.exports = { checkIfFileWasScrapped };
