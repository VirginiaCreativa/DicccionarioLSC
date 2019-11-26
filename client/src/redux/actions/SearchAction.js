import {
  GET_SEARCHING,
  GET_SEARCH_TAGS,
  GET_TAGS_MANOS,
  GET_TAGS_UBICACION,
  GET_TAGS_DEPARTAMENTO,
  GET_TAGS_TEMAS,
  GET_TAGS_USO,
  REMOVE_TAGS_MANOS,
  REMOVE_TAGS_UBICACION,
} from '../types';

export const Searching = payload => ({
  type: GET_SEARCHING,
  payload,
});

export const getSearchTags = payload => ({
  type: GET_SEARCH_TAGS,
  payload,
});

export const getTagsManos = payload => ({
  type: GET_TAGS_MANOS,
  payload,
});

export const getTagsUbicacion = payload => ({
  type: GET_TAGS_UBICACION,
  payload,
});

export const getTagsDepartamento = payload => ({
  type: GET_TAGS_DEPARTAMENTO,
  payload,
});

export const getTagsTemas = payload => ({
  type: GET_TAGS_TEMAS,
  payload,
});

export const getTagsUso = payload => ({
  type: GET_TAGS_USO,
  payload,
});

export const removeTagsManos = index => ({
  type: REMOVE_TAGS_MANOS,
  index,
});

export const removeTagsUbicacion = index => ({
  type: REMOVE_TAGS_UBICACION,
  index,
});
