import {
  GET_SEARCHING,
  GET_SEARCH_TAGS,
  GET_TAGS_MANOS,
  GET_TAGS_UBICACION,
  GET_TAGS_TEMAS,
  GET_TAGS_USO,
} from '../types';

export const Searching = payload => ({
  type: GET_SEARCHING,
  payload,
});

export const SearchTags = payload => ({
  type: GET_SEARCH_TAGS,
  showTags: true,
  payload,
});

export const TagsManos = payload => ({
  type: GET_TAGS_MANOS,
  payload,
});
export const TagsUbicacion = payload => ({
  type: GET_TAGS_UBICACION,
  payload,
});
export const TagsTemas = payload => ({
  type: GET_TAGS_TEMAS,
  payload,
});
export const TagsUso = payload => ({
  type: GET_TAGS_USO,
  payload,
});
