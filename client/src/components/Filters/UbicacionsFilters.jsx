import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Group, BoxCard, Selections } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';
import ButtonSecondary from '../../common/Buttons/ButtonSecondary';

import delante from '../../assets/Data/UbicacionCuerpo_Delante';
import superior from '../../assets/Data/UbicacionCuerpo_Superior';
import central from '../../assets/Data/UbicacionCuerpo_Central';
import inferior from '../../assets/Data/UbicacionCuerpo_Inferior';
import brazo from '../../assets/Data/UbicacionCuerpo_Brazo';

const ManosFilter = ({ onChange, className }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionUbicacion);
  const [isUbicDelante, setUbicDelante] = useState(true);
  const [isUbicSuperior, setUbicSuperior] = useState(false);
  const [isUbicCentral, setUbicCentral] = useState(false);
  const [isUbicInferior, setUbicInferior] = useState(false);
  const [isUbicBrazo, setUbicBrazo] = useState(false);

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

  return (
    <>
      {hasOptionActive && (
        <>
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

          <Group>
            {isUbicDelante && (
              <BoxCard>
                {delante.map(item => (
                  <CardCheck key={item.id} {...item} onChange={onChange} />
                ))}
              </BoxCard>
            )}
            {isUbicSuperior && (
              <BoxCard>
                {superior.map(item => (
                  <CardCheck key={item.id} {...item} onChange={onChange} />
                ))}
              </BoxCard>
            )}
            {isUbicCentral && (
              <BoxCard>
                {central.map(item => (
                  <CardCheck key={item.id} {...item} onChange={onChange} />
                ))}
              </BoxCard>
            )}
            {isUbicInferior && (
              <BoxCard>
                {inferior.map(item => (
                  <CardCheck key={item.id} {...item} onChange={onChange} />
                ))}
              </BoxCard>
            )}
            {isUbicBrazo && (
              <BoxCard>
                {brazo.map(item => (
                  <CardCheck key={item.id} {...item} onChange={onChange} />
                ))}
              </BoxCard>
            )}
          </Group>
        </>
      )}
    </>
  );
};

export default ManosFilter;
