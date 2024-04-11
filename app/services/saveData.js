const fs = require("fs");
const path = require("path");
const ensurePathExists = require("../utils/ensurePathExists");

const saveData = ({ url, resourceName, data }) => {
  try {
    console.info(`Saving scrapped data on ${url}`);

    const filePath = path.join(
      __dirname,
      "../../scrapped-data/html/",
      url,
      resourceName
    );

    ensurePathExists(filePath);

    fs.writeFileSync(filePath, data);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  saveData,
};
