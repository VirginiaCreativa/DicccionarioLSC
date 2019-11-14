import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BtnOptions, Selections, Title } from './Filters.Styled';

import Button from './UI/Button';

const Filter = () => {
  const [isMano, setMano] = useState(true);
  const [isUbicacion, setUbicacion] = useState(true);
  const [isTemas, setTemas] = useState(true);
  const [isUso, setUso] = useState(true);

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
    <>
      <BtnOptions>
        <Button onClick={handleMano}>Forma de la mano</Button>
        <Button onClick={handleUbicacion}>Ubicación del cuerpo</Button>
        <Button onClick={handleTemas}>Temas</Button>
        <Button onClick={handleUso}>Uso</Button>
      </BtnOptions>
    </>
  );
};
export default Filter;
