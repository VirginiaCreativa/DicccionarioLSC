import {
  GET_SEARCHING,
  GET_SEARCH_TAGS,
  GET_TAGS_MANOS,
  TAKE_TAG_MANO,
  GET_TAGS_UBICACION,
  GET_TAGS_DEPARTAMENTO,
  GET_TAGS_TEMAS,
  GET_TAGS_USO,
  REMOVE_TAGS_MANOS,
  REMOVE_TAGS_UBICACION,
} from '../types';

const initialState = {
  search: '',
  searchTags: [],
  showTags: false,
  takeTagMano: '',
  tagManos: [],
  tagUbicacion: [],
  tagDepartamento: '',
  tagTemas: '',
  tagUso: '',
};

function SearchingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHING:
      return {
        ...state,
        search: action.payload,
      };
    case GET_SEARCH_TAGS:
      return {
        ...state,
        showTags: true,
        searchTags: action.payload,
      };
    case GET_TAGS_MANOS:
      return {
        ...state,
        tagManos: [...state.tagManos, action.payload],
        showTags: true,
      };
    case GET_TAGS_UBICACION:
      return {
        ...state,
        tagUbicacion: [...state.tagUbicacion, action.payload],
        showTags: true,
      };
    case GET_TAGS_TEMAS:
      return {
        ...state,
        tagTemas: action.payload,
        showTags: true,
      };

    case GET_TAGS_USO:
      return {
        ...state,
        tagUso: action.payload,
        showTags: true,
      };
    case GET_TAGS_DEPARTAMENTO:
      return {
        ...state,
        tagDepartamento: action.payload,
        showTags: true,
      };
    case REMOVE_TAGS_MANOS:
      return {
        ...state,
        tagManos: state.tagManos.filter(item => item !== action.name),
      };
    case TAKE_TAG_MANO:
      return {
        ...state,
        takeTagMano: action.value,
      };

    default:
      return state;
  }
}

export default SearchingReducer;
