import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  GroupFilter,
  Selections,
  BoxFilters,
  BoxFilter,
  Title,
} from './Filters.Styled';

import ButtonSecondary from '../../common/Buttons/ButtonSecondary';
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
  };
  const handleUbicSuperior = () => {
    setUbicSuperior(!isUbicSuperior);
  };
  const handleUbicCentral = () => {
    setUbicCentral(!isUbicCentral);
  };
  const handleUbicInferior = () => {
    setUbicInferior(!isUbicInferior);
  };
  const handleUbicBrazo = () => {
    setUbicBrazo(!isUbicBrazo);
  };

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    div {
      margin-right: 10px;
    }
  `;

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
          <ButtonSecondary onClick={handleUbicDelante}>Delante</ButtonSecondary>
          <ButtonSecondary onClick={handleUbicSuperior}>
            Superior
          </ButtonSecondary>
          <ButtonSecondary onClick={handleUbicCentral}>Central</ButtonSecondary>
          <ButtonSecondary onClick={handleUbicInferior}>
            Inferior
          </ButtonSecondary>
          <ButtonSecondary onClick={handleUbicBrazo}>Brazo</ButtonSecondary>
        </Selections>
        <Row>
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
            <FilterItem
              items={UbicCuerpoBrazoData}
              onChange={changeUbicCuerpo}
            />
          )}
        </Row>
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
