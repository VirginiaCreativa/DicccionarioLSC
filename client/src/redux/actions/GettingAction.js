import axios from 'axios';

import { GET_MENU_ACTIVE } from '../types';

export const getMenuActive = payload => ({
  type: GET_MENU_ACTIVE,
  payload,
});
