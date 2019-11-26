import {
  GET_MENU_ACTIVE,
  GET_FILTER_ACTIVE,
  GET_OPTION_MANOS,
  GET_OPTION_DEPARTAMENTOS,
  GET_OPTION_UBICACION,
  GET_OPTION_TEMAS,
  GET_OPTION_USO,
  GET_DISABLED_USO,
  GET_ACTIVE_USO,
} from '../types';

export const getMenuActive = payload => ({
  type: GET_MENU_ACTIVE,
  payload,
});

export const getFilterActive = payload => ({
  type: GET_FILTER_ACTIVE,
  payload,
});

export const optionManos = payload => ({
  type: GET_OPTION_MANOS,
  payload,
});

export const optionDepartamentos = payload => ({
  type: GET_OPTION_DEPARTAMENTOS,
  payload,
});

export const optionUbicacion = payload => ({
  type: GET_OPTION_UBICACION,
  payload,
});

export const optionTemas = payload => ({
  type: GET_OPTION_TEMAS,
  payload,
});

export const optionUso = payload => ({
  type: GET_OPTION_USO,
  payload,
});

export const checkDisableUso = () => ({
  type: GET_DISABLED_USO,
  disabledCheck: false,
});

export const checkActivUso = () => ({
  type: GET_ACTIVE_USO,
  activeCheck: true,
});
