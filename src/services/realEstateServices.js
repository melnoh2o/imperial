import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const RealEstatesServices = {
  async getMinMaxValues() {
    const { data } = await axios.get(`${URL_BASE}/real-estate/get-min-max`);
    return data;
  },

  async getFilterValues() {
    const { data } = await axios.get(`${URL_BASE}/real-estate/get-values`);
    return data;
  },

  async getAllRealEstate(currentPage, developerParam, locationParam, handoverParam, startPrice, finalPrice) {
    const { data } = await axios.get(
      `${URL_BASE}/real-estate/get-all?page=${currentPage}${developerParam}${locationParam}${handoverParam}${startPrice}${finalPrice}`
    );
    return data;
  },

  async getRealEstateById(id, lang = 'ru') {
    const { data } = await axios.get(`${URL_BASE}/real-estate/get-by-id/${id}?lang=${lang}`);
    return data.data;
  },

  async getByDeveloper(developerParam) {
    const { data } = await axios.get(`${URL_BASE}/real-estate/get-by-developer?developer=${developerParam}`);
    return data.data;
  },

  async getByLocation(locationParam) {
    const { data } = await axios.get(`${URL_BASE}/real-estate/get-by-location?location=${locationParam}`);
    return data.data;
  },
};
