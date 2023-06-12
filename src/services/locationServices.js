import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const LocationServices = {
  async getAll(lang = 'ru') {
    const { data } = await axios.get(`${URL_BASE}/location/get-all?lang=${lang}`);
    return data;
  },
};
