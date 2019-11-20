import {
  GET_MENU_ACTIVE,
  GET_FILTER_ACTIVE,
  GET_OPTION_MANOS,
  GET_OPTION_UBICACION,
  GET_OPTION_TEMAS,
  GET_OPTION_USO,
} from '../types';

const initialState = {
  activeMenu: false,
  activeFilter: true,
  activeOption: false,
  optionManos: false,
  optionUbicacion: false,
  optionTemas: false,
  optionUso: false,
  showTags: false,
};

function AuthReducer(state = initialState, action) {
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

    default:
      return state;
  }
}

export default AuthReducer;
