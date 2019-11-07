import { GET_MENU_ACTIVE } from '../types';

const initialState = {
  activeMenu: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ACTIVE:
      return {
        ...state,
        activeMenu: action.payload,
      };

    default:
      return state;
  }
}

export default AuthReducer;
