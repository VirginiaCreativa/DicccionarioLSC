import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Group, BoxCard, TitleUbic } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

import cabeza from '../../assets/Data/UbicacionCuerpo_Cabeza';
import tronco from '../../assets/Data/UbicacionCuerpo_Tronco';
import brazo from '../../assets/Data/UbicacionCuerpo_Brazo';
import mano from '../../assets/Data/UbicacionCuerpo_Mano';

const ManosFilter = ({ onChange, className }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionUbicacion);
  const [isUbicCabeza, setUbicCabeza] = useState(true);
  const [isUbicTronco, setUbicTronco] = useState(false);
  const [isUbicBrazo, setUbicBrazo] = useState(false);

  const handleUbicCabeza = () => {
    setUbicCabeza(!isUbicCabeza);
  };
  const handleUbicTronco = () => {
    setUbicTronco(!isUbicTronco);
  };
  const handleUbicBrazo = () => {
    setUbicBrazo(!isUbicBrazo);
  };

  return (
    <>
      {hasOptionActive && (
        <>
          <Group>
            <TitleUbic>Cabeza</TitleUbic>
            <BoxCard>
              {cabeza.map(item => (
                <CardCheck key={item.id} {...item} onChange={onChange} />
              ))}
            </BoxCard>
            <TitleUbic>Tronco</TitleUbic>
            <BoxCard>
              {tronco.map(item => (
                <CardCheck key={item.id} {...item} onChange={onChange} />
              ))}
            </BoxCard>
            <TitleUbic>Brazo</TitleUbic>
            <BoxCard>
              {brazo.map(item => (
                <CardCheck key={item.id} {...item} onChange={onChange} />
              ))}
            </BoxCard>
            <TitleUbic>Mano</TitleUbic>
            <BoxCard>
              {mano.map(item => (
                <CardCheck key={item.id} {...item} onChange={onChange} />
              ))}
            </BoxCard>
          </Group>
        </>
      )}
    </>
  );
};

export default ManosFilter;
