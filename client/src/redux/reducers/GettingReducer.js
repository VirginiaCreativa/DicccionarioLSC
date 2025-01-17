import {
  GET_MENU_ACTIVE,
  GET_FILTER_ACTIVE,
  GET_OPTION_MANOS,
  GET_OPTION_UBICACION,
  GET_OPTION_DEPARTAMENTOS,
  GET_OPTION_TEMAS,
  GET_OPTION_USO,
  GET_DISABLED_USO,
  GET_ACTIVE_USO,
  GET_ACTIVE_MANOS,
  GET_DISABLED_MANOS,
} from '../types';

const initialState = {
  activeMenu: false,
  activeFilter: true,
  activeOption: false,
  optionManos: false,
  optionUbicacion: false,
  optionDepartamentos: false,
  optionTemas: false,
  optionUso: false,
  showTags: false,
  checkbox: true,
  checkManos: false,
};

function GettingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ACTIVE:
      return {
        ...state,
        activeMenu: action.payload,
      };
    case GET_FILTER_ACTIVE:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case GET_OPTION_MANOS:
      return {
        ...state,
        optionManos: action.payload,
      };
    case GET_OPTION_UBICACION:
      return {
        ...state,
        optionUbicacion: action.payload,
      };
    case GET_OPTION_DEPARTAMENTOS:
      return {
        ...state,
        optionDepartamentos: action.payload,
      };
    case GET_OPTION_TEMAS:
      return {
        ...state,
        optionTemas: action.payload,
      };
    case GET_OPTION_USO:
      return {
        ...state,
        optionUso: action.payload,
      };
    case GET_DISABLED_USO:
      return {
        ...state,
        checkbox: action.disabledCheck,
      };
    case GET_ACTIVE_USO:
      return {
        ...state,
        checkbox: action.activeCheck,
      };
    case GET_DISABLED_MANOS:
      return {
        ...state,
        checkManos: action.disabledCheck,
      };
    case GET_ACTIVE_MANOS:
      return {
        ...state,
        checkManos: action.activeCheck,
      };

    default:
      return state;
  }
}

export default GettingReducer;
