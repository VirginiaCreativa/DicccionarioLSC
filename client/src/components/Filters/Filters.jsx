import React, { useState } from 'react';
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
import UbicCuerpoDelanteData from '../../assets/Data/UbicacionCuerpo_Delante';
import UbicCuerpoSuperiorData from '../../assets/Data/UbicacionCuerpo_Superior';
import UbicCuerpoCentralData from '../../assets/Data/UbicacionCuerpo_Central';
import UbicCuerpoInferiorData from '../../assets/Data/UbicacionCuerpo_Inferior';
import UbicCuerpoBrazoData from '../../assets/Data/UbicacionCuerpo_Brazo';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';

const Filter = () => {
  const [isUbicDelante, setUbicDelante] = useState(true);
  const [isUbicSuperior, setUbicSuperior] = useState(false);
  const [isUbicCentral, setUbicCentral] = useState(false);
  const [isUbicInferior, setUbicInferior] = useState(false);
  const [isUbicBrazo, setUbicBrazo] = useState(false);
  const [isUbicActive, setUbicActive] = useState(false);
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

  const handleUbicDelante = () => {
    setUbicDelante(true);
    setUbicSuperior(false);
    setUbicCentral(false);
    setUbicInferior(false);
    setUbicBrazo(false);
  };
  const handleUbicSuperior = () => {
    setUbicDelante(false);
    setUbicSuperior(true);
    setUbicCentral(false);
    setUbicInferior(false);
    setUbicBrazo(false);
  };
  const handleUbicCentral = () => {
    setUbicDelante(false);
    setUbicSuperior(false);
    setUbicCentral(true);
    setUbicInferior(false);
    setUbicBrazo(false);
  };
  const handleUbicInferior = () => {
    setUbicDelante(false);
    setUbicSuperior(false);
    setUbicCentral(false);
    setUbicInferior(true);
    setUbicBrazo(false);
  };
  const handleUbicBrazo = () => {
    setUbicDelante(false);
    setUbicSuperior(false);
    setUbicCentral(false);
    setUbicInferior(false);
    setUbicBrazo(true);
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUbicDelante}>
            Delante
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUbicSuperior}>
            Superior
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUbicCentral}>
            Central
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUbicInferior}>
            Inferior
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUbicBrazo}>
            Brazo
          </button>
        </Selections>
        {isUbicDelante && (
          <FilterItem
            items={UbicCuerpoDelanteData}
            onChange={changeUbicCuerpo}
          />
        )}
        {isUbicSuperior && (
          <FilterItem
            items={UbicCuerpoSuperiorData}
            onChange={changeUbicCuerpo}
          />
        )}
        {isUbicCentral && (
          <FilterItem
            items={UbicCuerpoCentralData}
            onChange={changeUbicCuerpo}
          />
        )}
        {isUbicInferior && (
          <FilterItem
            items={UbicCuerpoInferiorData}
            onChange={changeUbicCuerpo}
          />
        )}
        {isUbicBrazo && (
          <FilterItem items={UbicCuerpoBrazoData} onChange={changeUbicCuerpo} />
        )}
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
