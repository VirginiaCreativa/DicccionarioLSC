import React from 'react';
import { useHistory } from 'react-router-dom';
import { GroupFilter, BoxFilters, Title } from './Filter.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';
import FormaManoData from '../../assets/Data/FormaMano';
import UbicacionCuerpoData from '../../assets/Data/UbicacionCuerpo';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';

const Filter = ({ onClick }) => {
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

  const handleSubmitFilter = () => {
    history.push('/resultado');
  };

  return (
    <>
      <Title>
        Opciones <span>de búsqueda avanzada</span>
      </Title>

      <GroupFilter>
        <h2>Forma de la mano</h2>
        <BoxFilters>
          {FormaManoData.map(mano => (
            <CardCheck key={mano.id} {...mano} onChange={changeManos} />
          ))}
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Ubicación del cuerpo</h2>
        <BoxFilters>
          {UbicacionCuerpoData.map(mano => (
            <CardCheck key={mano.id} {...mano} onChange={changeUbicCuerpo} />
          ))}
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Temas</h2>
        <BoxFilters>
          {TemasData.map(mano => (
            <CardCheck key={mano.id} {...mano} onChange={changeTemas} />
          ))}
        </BoxFilters>
      </GroupFilter>

      <GroupFilter>
        <h2>Uso</h2>
        <BoxFilters>
          {UsoData.map(mano => (
            <CardCheck key={mano.id} {...mano} onChange={changeUso} />
          ))}
        </BoxFilters>
      </GroupFilter>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '200px' }}
          onClick={onClick}>
          BUSCADOR
        </button>
      </div>
    </>
  );
};
export default Filter;
