import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tags } from './Filters.Styled';

const TagsResults = () => {
  const hasShowTags = useSelector(state => state.Search.showTags);
  const hasSelectManos = useSelector(state => state.Search.tagManos);
  const hasSelectUbicacion = useSelector(state => state.Search.tagUbicacion);
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
    </>
  );
};

export default TagsResults;
