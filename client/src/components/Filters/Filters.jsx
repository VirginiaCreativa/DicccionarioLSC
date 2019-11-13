import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GroupFilter, Selections, Title } from './Filters.Styled';

import ButtonSecondary from '../../common/Buttons/ButtonSecondary';
import FilterCard from './CardFilters';
import FilterTemas from './TemasFilters';
import FilterUso from './UsoFilters';
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
    setUbicDelante(!isUbicDelante);
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
      margin-right: 6px;
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
        <FilterCard items={FormaManoData} onChange={changeManos} />
      </GroupFilter>

      {/* UBICACION DEL CUERPO */}
      <GroupFilter>
        <h2>Ubicación del cuerpo</h2>
        <Selections>
          <ButtonSecondary
            onClick={handleUbicDelante}
            active={isUbicDelante ? '#2572dd' : ''}>
            Delante
          </ButtonSecondary>
          <ButtonSecondary
            onClick={handleUbicSuperior}
            active={isUbicSuperior ? '#2572dd' : ''}>
            Superior
          </ButtonSecondary>
          <ButtonSecondary
            onClick={handleUbicCentral}
            active={isUbicCentral ? '#2572dd' : ''}>
            Central
          </ButtonSecondary>
          <ButtonSecondary
            onClick={handleUbicInferior}
            active={isUbicInferior ? '#2572dd' : ''}>
            Inferior
          </ButtonSecondary>
          <ButtonSecondary
            onClick={handleUbicBrazo}
            active={isUbicBrazo ? '#2572dd' : ''}>
            Brazo
          </ButtonSecondary>
        </Selections>
        <Row>
          {isUbicDelante && (
            <FilterCard
              items={UbicCuerpoDelanteData}
              onChange={changeUbicCuerpo}
            />
          )}
          {isUbicSuperior && (
            <FilterCard
              items={UbicCuerpoSuperiorData}
              onChange={changeUbicCuerpo}
            />
          )}
          {isUbicCentral && (
            <FilterCard
              items={UbicCuerpoCentralData}
              onChange={changeUbicCuerpo}
            />
          )}
          {isUbicInferior && (
            <FilterCard
              items={UbicCuerpoInferiorData}
              onChange={changeUbicCuerpo}
            />
          )}
          {isUbicBrazo && (
            <FilterCard
              items={UbicCuerpoBrazoData}
              onChange={changeUbicCuerpo}
            />
          )}
        </Row>
      </GroupFilter>

      <div className="row" style={{ marginBottom: '30px' }}>
        <div className="col-6">
          {/* TEMAS */}
          <GroupFilter>
            <h2>Temas</h2>
            <FilterTemas items={TemasData} onChange={changeTemas} />
          </GroupFilter>
        </div>
        <div className="col-6">
          {/* USO */}
          <GroupFilter>
            <h2>Uso</h2>
            <FilterUso items={UsoData} onChange={changeUso} />
          </GroupFilter>
        </div>
      </div>

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
