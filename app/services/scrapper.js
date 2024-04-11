const Axios = require("axios");

const restclient = Axios.create({
  baseURL: "http://www.comuni-italiani.it",
});

const getCity = async ({ provinceId, cityId }) => {
  try {
    console.log("Getting info from comuni-italiani.it");
    const data = await restclient.get(`/${provinceId}/${cityId}/index.html`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProvince = async ({ provinceId }) => {
  console.log("Getting info from comuni-italiani.it");
  try {
    const data = await restclient.get(`/${provinceId}/index.html`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getCityMap = async ({ provinceId, cityId }) => {
  try {
    console.log("Getting info from comuni-italiani.it");

    const data = await restclient.get(`/${provinceId}/${cityId}/mappa.html`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProvinceMap = async ({ provinceId }) => {
  try {
    console.log("Getting info from comuni-italiani.it");

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
