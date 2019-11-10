import { GET_MENU_ACTIVE, GET_SEARCH_PREPOSITIOM } from '../types';

const initialState = {
  activeMenu: false,
  prepos: true,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ACTIVE:
      return {
        ...state,
        activeMenu: action.payload,
      };
    case GET_SEARCH_PREPOSITIOM:
      return {
        ...state,
        prepos: action.payload,
      };

    default:
      return state;
  }
}

export default AuthReducer;
