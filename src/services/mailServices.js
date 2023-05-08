import axios from 'axios';

import { URL_BASE } from '../constants/api';

export const MailServices = {
  async senMail(values) {
    await axios.post(`${URL_BASE}/mail/sent`, values);
  },

  async sentLetter(values) {
    await axios.post(`${URL_BASE}/mail/letter`, values);
  },
};
