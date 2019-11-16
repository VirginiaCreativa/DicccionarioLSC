import React, { useState, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  optionManos,
  optionUbicacion,
  optionTemas,
  optionUso,
} from '../../redux/actions/GettingAction';

import { BtnOptions, OptionFilter, Filters } from './Filters.Styled';
import Button from './UI/ButtonFilter';
import Spinner from '../../common/Spinner/Spinner';

import FormaManoData from '../../assets/Data/FormaMano';
import UbicCuerpoDelanteData from '../../assets/Data/UbicacionCuerpo_Delante';
import UbicCuerpoSuperiorData from '../../assets/Data/UbicacionCuerpo_Superior';
import UbicCuerpoCentralData from '../../assets/Data/UbicacionCuerpo_Central';
import UbicCuerpoInferiorData from '../../assets/Data/UbicacionCuerpo_Inferior';
import UbicCuerpoBrazoData from '../../assets/Data/UbicacionCuerpo_Brazo';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';

const ManosFilter = lazy(() => import('./ManosFilters'));
const UbicacionFilter = lazy(() => import('./UbicacionsFilters'));
const TemasFilter = lazy(() => import('./TemasFilters'));

const Filter = () => {
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
    setUbicacion(false);
    setTemas(false);
    setUso(false);
    setMano(!isMano);
    dispatch(optionManos(true));
    if (isMano === true) {
      dispatch(optionManos(false));
    }
  };
  const handleUbicacion = () => {
    setMano(false);
    setTemas(false);
    setUso(false);
    setUbicacion(!isUbicacion);
    dispatch(optionUbicacion(true));
    if (isUbicacion === true) {
      dispatch(optionUbicacion(false));
    }
  };
  const handleTemas = () => {
    setMano(false);
    setUbicacion(false);
    setUso(false);
    setTemas(!isTemas);
    dispatch(optionTemas(true));
    if (isTemas === true) {
      dispatch(optionTemas(false));
    }
  };
  const handleUso = () => {
    setMano(false);
    setTemas(false);
    setUbicacion(false);
    setUso(!isUso);
    dispatch(optionUso(true));
    if (isUso === true) {
      dispatch(optionUso(false));
    }
  };

  return (
    <Filters>
      <h3>Búsqueda Avanzada</h3>
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

      <OptionFilter
        className={
          isMano ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
        }
        height="390px">
        <Suspense fallback={<Spinner />}>
          <ManosFilter items={FormaManoData} onChange={changeManos} />
        </Suspense>
      </OptionFilter>

      <OptionFilter
        className={
          isUbicacion ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
        }
        height="180px"
        top="-30px"
        zindex="2">
        <Suspense fallback={<Spinner />}>
          <UbicacionFilter
            items={UbicCuerpoDelanteData}
            onChange={changeManos}
          />
        </Suspense>
      </OptionFilter>

      <OptionFilter
        className={
          isTemas ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
        }
        height="320px"
        top="-60px"
        zindex="4">
        <Suspense fallback={<Spinner />}>
          <TemasFilter items={TemasData} onChange={changeManos} />
        </Suspense>
      </OptionFilter>
    </Filters>
  );
};
export default Filter;
