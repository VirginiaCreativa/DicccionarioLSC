import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getFilterOptionActive } from '../../redux/actions/GettingAction';

import { BtnOptions, GroupFilter, Filters } from './Filters.Styled';
import Button from './UI/ButtonFilter';

import FormaManoData from '../../assets/Data/FormaMano';
import UbicCuerpoDelanteData from '../../assets/Data/UbicacionCuerpo_Delante';
import UbicCuerpoSuperiorData from '../../assets/Data/UbicacionCuerpo_Superior';
import UbicCuerpoCentralData from '../../assets/Data/UbicacionCuerpo_Central';
import UbicCuerpoInferiorData from '../../assets/Data/UbicacionCuerpo_Inferior';
import UbicCuerpoBrazoData from '../../assets/Data/UbicacionCuerpo_Brazo';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';

import FilterCard from './CardFilters';

const Filter = () => {
  const hasOptionActive = useSelector(state => state.Getting.activeOption);
  const dispatch = useDispatch();
  const [isMano, setMano] = useState(false);
  const [isUbicacion, setUbicacion] = useState(false);
  const [isTemas, setTemas] = useState(false);
  const [isUso, setUso] = useState(false);
  let activeMano;
  let activeUbicacion;

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

  const handleMano = () => {
    setMano(!isMano);
  };
  const handleUbicacion = () => {
    setUbicacion(!isUbicacion);
  };
  const handleTemas = () => {
    setTemas(!isTemas);
  };
  const handleUso = () => {
    setUso(!isUso);
  };

  return (
    <Filters>
      <BtnOptions>
        <Button
          onClick={handleMano}
          active={isMano ? '#2572dd' : ''}
          activeColor={isMano ? '#fff' : ''}>
          Forma de la mano
        </Button>
        <Button
          onClick={handleUbicacion}
          active={isUbicacion ? '#2572dd' : ''}
          activeColor={isUbicacion ? '#fff' : ''}>
          Ubicación del cuerpo
        </Button>
        <Button
          onClick={handleTemas}
          active={isTemas ? '#2572dd' : ''}
          activeColor={isTemas ? '#fff' : ''}>
          Temas
        </Button>
        <Button
          onClick={handleUso}
          active={isUso ? '#2572dd' : ''}
          activeColor={isUso ? '#fff' : ''}>
          Uso
        </Button>
      </BtnOptions>

      {isMano && (
        <GroupFilter>
          <FilterCard items={FormaManoData} onChange={changeManos} />
        </GroupFilter>
      )}
    </Filters>
  );
};
export default Filter;
