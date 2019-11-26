import React, { useState, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TagsResults from './TagsResults';

import {
  optionManos,
  optionUbicacion,
  optionDepartamentos,
  optionTemas,
  optionUso,
} from '../../redux/actions/GettingAction';

import {
  getTagsManos,
  getTagsUbicacion,
  getTagsDepartamento,
  getTagsTemas,
  getTagsUso,
} from '../../redux/actions/SearchAction';

import { Options, BtnOptions, OptionFilter, Filters } from './Filters.Styled';

import Button from './UI/ButtonFilter';
import Spinner from '../../common/Spinner/Spinner';

import FormaManoData from '../../assets/Data/FormaMano';
import TemasData from '../../assets/Data/Temas';
import UsoData from '../../assets/Data/Uso';
import DepartamentosData from '../../assets/Data/Departamentos';

const ManosFilter = lazy(() => import('./ManosFilters'));
const UbicacionFilter = lazy(() => import('./UbicacionsFilters'));
const DepartamentosFilter = lazy(() => import('./DepartamentosFilters'));
const TemasFilter = lazy(() => import('./TemasFilters'));
const UsoFilter = lazy(() => import('./UsoFilters'));

const Filter = () => {
  const dispatch = useDispatch();

  const [isMano, setMano] = useState(false);
  const [isUbicacion, setUbicacion] = useState(false);
  const [isTemas, setTemas] = useState(false);
  const [isDepartamentos, setDepartamentos] = useState(false);
  const [isUso, setUso] = useState(false);
  const hasShowTags = useSelector(state => state.Search.showTags);

  const changeManos = ev => {
    dispatch(getTagsManos(ev.target.value));
  };
  const changeUbicCuerpo = ev => {
    dispatch(getTagsUbicacion(ev.target.value));
  };
  const changeDepartamentos = ev => {
    dispatch(getTagsDepartamento(ev.target.value));
  };
  const changeTemas = ev => {
    dispatch(getTagsTemas(ev.target.value));
  };
  const changeUso = ev => {
    dispatch(getTagsUso(ev.target.value));
  };

  const handleMano = () => {
    setUbicacion(false);
    setDepartamentos(false);
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
    setDepartamentos(false);
    setUso(false);
    setUbicacion(!isUbicacion);
    dispatch(optionUbicacion(true));
    if (isUbicacion === true) {
      dispatch(optionUbicacion(false));
    }
  };
  const handleDepartamentos = () => {
    setMano(false);
    setTemas(false);
    setUso(false);
    setUbicacion(false);
    setDepartamentos(!isDepartamentos);
    dispatch(optionDepartamentos(true));
    if (isDepartamentos === true) {
      dispatch(optionDepartamentos(false));
    }
  };
  const handleTemas = () => {
    setMano(false);
    setUbicacion(false);
    setDepartamentos(false);
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
    setDepartamentos(false);
    setUso(!isUso);
    dispatch(optionUso(true));
    if (isUso === true) {
      dispatch(optionUso(false));
    }
  };

  return (
    <Filters>
      <h4>Búsqueda Avanzada</h4>
      {hasShowTags && <TagsResults />}
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
          onClick={handleDepartamentos}
          active={isDepartamentos ? '#2572dd' : ''}
          activeColor={isDepartamentos ? '#fff' : ''}>
          Departamentos
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

      <Options
        className={isMano || isUbicacion || isTemas || isUso ? 'Show' : 'Hide'}>
        <OptionFilter
          zindex="1"
          height="330px"
          className={
            isMano ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
          }>
          <Suspense fallback={<Spinner />}>
            <ManosFilter items={FormaManoData} onChange={changeManos} />
          </Suspense>
        </OptionFilter>

        <OptionFilter
          height="580px"
          className={
            isUbicacion ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
          }
          zindex="2">
          <Suspense fallback={<Spinner />}>
            <UbicacionFilter onChange={changeUbicCuerpo} />
          </Suspense>
        </OptionFilter>

        <OptionFilter
          height="380px"
          className={
            isDepartamentos
              ? ['Box', 'Show'].join(' ')
              : ['Box', 'Hide'].join(' ')
          }
          zindex="2">
          <Suspense fallback={<Spinner />}>
            <DepartamentosFilter
              items={DepartamentosData}
              onChange={changeDepartamentos}
            />
          </Suspense>
        </OptionFilter>

        <OptionFilter
          height="250px"
          className={
            isTemas ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
          }
          zindex="3">
          <Suspense fallback={<Spinner />}>
            <TemasFilter items={TemasData} onChange={changeTemas} />
          </Suspense>
        </OptionFilter>

        <OptionFilter
          height="110px"
          className={
            isUso ? ['Box', 'Show'].join(' ') : ['Box', 'Hide'].join(' ')
          }
          zindex="4">
          <Suspense fallback={<Spinner />}>
            <UsoFilter items={UsoData} onChange={changeUso} />
          </Suspense>
        </OptionFilter>
      </Options>
    </Filters>
  );
};
export default Filter;
