import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const LocationServices = {
  async getAll() {
    const { data } = await axios.get(`${URL_BASE}/location/get-all`);
    return data;
  },
};
