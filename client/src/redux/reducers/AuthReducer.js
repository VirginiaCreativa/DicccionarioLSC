import {
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FALL,
  FETCH_AUTH_LOGOUT,
} from '../types';

const initialState = {};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTH_SUCCESS:
      return {};
    case FETCH_AUTH_FALL:
      return {};
    case FETCH_AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default AuthReducer;
