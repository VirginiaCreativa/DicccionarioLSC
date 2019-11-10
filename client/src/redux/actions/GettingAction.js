import { GET_MENU_ACTIVE, GET_SEARCH_PREPOSITIOM } from '../types';

export const getMenuActive = payload => ({
  type: GET_MENU_ACTIVE,
  payload,
});

export const getSearchPrepos = payload => ({
  type: GET_SEARCH_PREPOSITIOM,
  payload,
});
