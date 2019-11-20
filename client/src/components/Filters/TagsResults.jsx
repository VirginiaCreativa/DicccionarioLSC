import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tags } from './Filters.Styled';

const TagsResults = () => {
  const hasSelectManos = useSelector(state => state.Search.tagManos);
  const hasSelectUbicacion = useSelector(state => state.Search.tagUbicacion);
  const hasSelectTemas = useSelector(state => state.Search.tagTemas);
  const hasSelectUso = useSelector(state => state.Search.tagUso);
  return (
    <>
      {hasSelectManos.length >= 1 && (
        <Tags>
          <h6>Forma de manos:</h6>
          {hasSelectManos.map(item => (
            <p key={item}>{item}</p>
          ))}
        </Tags>
      )}
      {hasSelectUbicacion.length >= 1 && (
        <Tags>
          <h6>Ubicacion:</h6>
          {hasSelectUbicacion.map(item => (
            <p key={item}>{item}</p>
          ))}
        </Tags>
      )}
      {hasSelectTemas.length >= 1 && (
        <Tags>
          <h6>Tema:</h6>
          <p>{hasSelectTemas}</p>
        </Tags>
      )}
      {hasSelectUso.length >= 1 && (
        <Tags>
          <h6>Uso:</h6>
          <p>{hasSelectUso}</p>
        </Tags>
      )}
    </>
  );
};

export default TagsResults;
