import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tags, GroupTags } from './Filters.Styled';

import {
  getTagsManos,
  getTagsUbicacion,
  getTagsTemas,
  getTagsUso,
} from '../../redux/actions/SearchAction';

import { checkDisableUso } from '../../redux/actions/GettingAction';

const TagsResults = () => {
  const dispatch = useDispatch();
  const hasSelectManos = useSelector(state => state.Search.tagManos);
  const hasSelectUbicacion = useSelector(state => state.Search.tagUbicacion);
  const hasSelectDepartament = useSelector(
    state => state.Search.tagDepartamento
  );
  const hasSelectTemas = useSelector(state => state.Search.tagTemas);
  const hasSelectUso = useSelector(state => state.Search.tagUso);

  const handleDeleteUso = ev => {
    dispatch(getTagsUso(''));
    dispatch(checkDisableUso());
  };
  const handleDeleteTema = ev => {
    dispatch(getTagsTemas(''));
  };

  return (
    <GroupTags>
      {hasSelectManos.length >= 1 && (
        <Tags>
          <h6>Forma de manos</h6>
          {hasSelectManos.map(item => (
            <button type="button" key={item}>
              {item}
              <i className="bx bx-x" />
            </button>
          ))}
        </Tags>
      )}
      {hasSelectUbicacion.length >= 1 && (
        <Tags>
          <h6>Ubicacion</h6>
          {hasSelectUbicacion.map(item => (
            <button type="button" key={item}>
              {item}
              <i className="bx bx-x" />
            </button>
          ))}
        </Tags>
      )}
      {hasSelectDepartament.length >= 1 && (
        <Tags>
          <h6>Departamento</h6>
          <button type="button" onClick={handleDeleteTema}>
            {hasSelectDepartament}
            <i className="bx bx-x" />
          </button>
        </Tags>
      )}
      {hasSelectTemas.length >= 1 && (
        <Tags>
          <h6>Tema</h6>
          <button type="button" onClick={handleDeleteTema}>
            {hasSelectTemas}
            <i className="bx bx-x" />
          </button>
        </Tags>
      )}
      {hasSelectUso.length >= 1 && (
        <Tags>
          <h6>Uso</h6>
          <button type="button" onClick={handleDeleteUso}>
            {hasSelectUso}
            <i className="bx bx-x" />
          </button>
        </Tags>
      )}
    </GroupTags>
  );
};

export default TagsResults;
