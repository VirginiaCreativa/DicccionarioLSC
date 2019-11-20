import {
  GET_SEARCHING,
  GET_SEARCH_TAGS,
  GET_TAGS_MANOS,
  GET_TAGS_UBICACION,
  GET_TAGS_TEMAS,
  GET_TAGS_USO,
} from '../types';

const initialState = {
  search: '',
  searchTags: [],
  showTags: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHING:
      return {
        ...state,
        showTags: action.showTags,
        searchTags: action.payload,
      };
    case GET_SEARCH_TAGS:
      return {
        ...state,
        showTags: action.showTags,
        searchTags: action.payload,
      };

    default:
      return state;
  }
}

export default AuthReducer;
