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
import FilterItem from './Filter';
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

      {/* FORMA DE LA MANO */}
      <GroupFilter>
        <h2>Forma de la mano</h2>
        <FilterItem items={FormaManoData} onChange={changeManos} />
      </GroupFilter>

      {/* UBICACION DEL CUERPO */}
      <GroupFilter>
        <h2>Ubicación del cuerpo</h2>
        <Selections>
          <button type="button" className="btn btn-primary">
            Delante
          </button>
          <button type="button" className="btn btn-primary">
            Superior
          </button>
          <button type="button" className="btn btn-primary">
            Central
          </button>
          <button type="button" className="btn btn-primary">
            Inferior
          </button>
          <button type="button" className="btn btn-primary">
            Brazo
          </button>
        </Selections>
        <FilterItem items={UbicacionCuerpoData} onChange={changeUbicCuerpo} />
      </GroupFilter>

      {/* TEMAS */}
      <GroupFilter>
        <h2>Temas</h2>
        <FilterItem items={TemasData} onChange={changeTemas} />
      </GroupFilter>

      {/* USO */}
      <GroupFilter>
        <h2>Uso</h2>
        <FilterItem items={UsoData} onChange={changeUso} />
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
