import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const MailServices = {
  async submitTourRequest(values) {
    await axios.post(`${URL_BASE}/mail/submit-tour-request`, values);
  },

  async sentLetter(values) {
    await axios.post(`${URL_BASE}/mail/submit-application`, values);
  },
};
