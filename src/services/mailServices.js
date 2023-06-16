import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const MailServices = {
  async submitTourRequest(values) {
    await axios.post(`${URL_BASE}/mail/submit-tour-request`, values);
  },

  async submitRequest(values) {
    await axios.post(`${URL_BASE}/mail/submit-request`, values);
  },

  async submitApplication(values) {
    await axios.post(`${URL_BASE}/mail/submit-application`, values);
  },
};
