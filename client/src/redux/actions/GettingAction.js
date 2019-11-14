import { GET_MENU_ACTIVE, GET_FILTER_ACTIVE } from '../types';

export const getMenuActive = payload => ({
  type: GET_MENU_ACTIVE,
  payload,
});
export const getFilterActive = payload => ({
  type: GET_FILTER_ACTIVE,
  payload,
});
