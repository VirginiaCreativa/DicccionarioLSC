import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  GroupFilter,
  Selections,
  BoxFilters,
  BoxFilter,
  Title,
} from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';
import FormaManoData from '../../assets/Data/FormaMano';
import UbicacionCuerpoData from '../../assets/Data/UbicacionCuerpo';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';

const Filter = () => {
  const history = useHistory();
  const changeManos = ev => {
    console.log(ev.target.value);
  };
  const changeUbicCuerpo = ev => {
    console.log(ev.target.value);
  };
  const changeTemas = ev => {
    console.log(ev.target.value);
  };
  const changeUso = ev => {
    console.log(ev.target.value);
  };

  return (
    <>
      <Title>
        Opciones <span>de búsqueda avanzada</span>
      </Title>

      <GroupFilter>
        <h2>Forma de la mano</h2>
        <BoxFilters>
          <BoxFilter>
            {FormaManoData.map(mano => (
              <CardCheck key={mano.id} {...mano} onChange={changeManos} />
            ))}
          </BoxFilter>
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Ubicación del cuerpo</h2>
        <Selections>
          <button type="button">Delante</button>
          <button type="button">Superior</button>
          <button type="button">Central</button>
          <button type="button">Inferior</button>
          <button type="button">Brazo</button>
        </Selections>
        <BoxFilters>
          <BoxFilter>
            {UbicacionCuerpoData.map(mano => (
              <CardCheck key={mano.id} {...mano} onChange={changeUbicCuerpo} />
            ))}
          </BoxFilter>
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Temas</h2>
        <BoxFilters>
          <BoxFilter>
            {TemasData.map(mano => (
              <CardCheck key={mano.id} {...mano} onChange={changeTemas} />
            ))}
          </BoxFilter>
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Uso</h2>
        <BoxFilters>
          <BoxFilter>
            {UsoData.map(mano => (
              <CardCheck key={mano.id} {...mano} onChange={changeUso} />
            ))}
          </BoxFilter>
        </BoxFilters>
      </GroupFilter>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '200px' }}
          onClick={() => history.push('/resultado')}>
          BUSCADOR
        </button>
      </div>
    </>
  );
};
export default Filter;
