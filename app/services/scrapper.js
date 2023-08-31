const cheerio = require("cheerio");

const Axios = require("axios");

const restclient = Axios.create({
  baseURL: "http://www.comuni-italiani.it",
});

const getCity = async ({ provinceId, cityId }) => {
  try {
    const data = await restclient.get(`/${provinceId}/${cityId}/index.html`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProvince = async ({ provinceId }) => {
  try {
    const data = await restclient.get(`/${provinceId}/`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getCity,
  getProvince,
};
