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
  }
};

const getProvince = async ({ provinceId }) => {
  try {
    const data = await restclient.get(`/${provinceId}/`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCity,
  getProvince,
};
