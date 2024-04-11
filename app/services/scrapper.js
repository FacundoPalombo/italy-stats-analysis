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
    const data = await restclient.get(`/${provinceId}/index.html`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getCityMap = async ({ provinceId, cityId }) => {
  try {
    const data = await restclient.get(`/${provinceId}/${cityId}/mappa.html`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProvinceMap = async ({ provinceId }) => {
  try {
    const data = await restclient.get(`/${provinceId}/mappa.html`);

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCity,
  getProvince,
  getCityMap,
  getProvinceMap,
};
