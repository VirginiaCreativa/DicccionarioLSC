import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tags, GroupTags } from './Filters.Styled';

const TagsResults = () => {
  const hasSelectManos = useSelector(state => state.Search.tagManos);
  const hasSelectUbicacion = useSelector(state => state.Search.tagUbicacion);
  const hasSelectTemas = useSelector(state => state.Search.tagTemas);
  const hasSelectUso = useSelector(state => state.Search.tagUso);
  return (
    <GroupTags>
      {hasSelectManos.length >= 1 && (
        <Tags>
          <h6>Forma de manos:</h6>
          {hasSelectManos.map(item => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </Tags>
      )}
      {hasSelectUbicacion.length >= 1 && (
        <Tags>
          <h6>Ubicacion:</h6>
          {hasSelectUbicacion.map(item => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </Tags>
      )}
      {hasSelectTemas.length >= 1 && (
        <Tags>
          <h6>Tema:</h6>
          <button type="button">{hasSelectTemas}</button>
        </Tags>
      )}
      {hasSelectUso.length >= 1 && (
        <Tags>
          <h6>Uso:</h6>
          <button type="button">{hasSelectUso}</button>
        </Tags>
      )}
    </GroupTags>
  );
};

export default TagsResults;
