import React from 'react';
import { GroupFilter, BoxFilters, Title } from './Filter.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';
import ManosDatas from '../../assets/Data/Manos.json';

const Filter = () => {
  const changeManos = ev => {
    console.log(ev.target.value);
  };

  return (
    <>
      <Title>Opciones de búsqueda avanzada</Title>

      <GroupFilter>
        <h2>Forma de la mano</h2>
        <BoxFilters>
          {ManosDatas.map(mano => (
            <CardCheck key={mano.id} {...mano} onChange={changeManos} />
          ))}
        </BoxFilters>
      </GroupFilter>
    </>
  );
};
export default Filter;
