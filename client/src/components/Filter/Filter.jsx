import React from 'react';
import { Title, BoxFilter } from './Filter.Styled';
import CardCheck from '../../common/CardCheck/CardCheck';

const Filter = () => {
  const icon1 = 'https://image.flaticon.com/icons/svg/2166/2166000.svg';
  const icon2 = 'https://image.flaticon.com/icons/svg/2165/2165888.svg';
  const icon3 = 'https://image.flaticon.com/icons/svg/2165/2165802.svg';

  return (
    <>
      <Title>Opciones de búsqueda avanzada</Title>
      <BoxFilter>
        <CardCheck img={icon1} />
        <CardCheck img={icon2} />
        <CardCheck img={icon3} />
      </BoxFilter>
    </>
  );
};
export default Filter;
