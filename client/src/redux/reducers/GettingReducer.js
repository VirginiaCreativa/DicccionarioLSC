import {
  GET_MENU_ACTIVE,
  GET_FILTER_ACTIVE,
  GET_FILTER_OPTION_ACTIVE,
} from '../types';

const initialState = {
  activeMenu: false,
  activeFilter: true,
  activeOption: false,
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
    case GET_FILTER_OPTION_ACTIVE:
      return {
        ...state,
        activeOption: action.payload,
      };

    default:
      return state;
  }
}

export default AuthReducer;
