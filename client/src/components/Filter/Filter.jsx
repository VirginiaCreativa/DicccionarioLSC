import React from 'react';
import styled from 'styled-components';
import CardCheck from '../../common/CardCheck/CardCheck';

const Filter = () => {
  const icon1 = 'https://image.flaticon.com/icons/svg/2166/2166000.svg';
  const icon2 = 'https://image.flaticon.com/icons/svg/2165/2165888.svg';
  const icon3 = 'https://image.flaticon.com/icons/svg/2165/2165802.svg';

  const BoxFilter = styled.div`
    display: flex;
  `;
  return (
    <>
      <h4
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          textTransform: 'uppercase',
        }}>
        Opciones de búsqueda avanzada
      </h4>
      <BoxFilter>
        <CardCheck img={icon1} heigth="120px" width="100px" />
        <CardCheck img={icon2} heigth="120px" width="100px" />
        <CardCheck img={icon3} heigth="120px" width="100px" />
      </BoxFilter>
    </>
  );
};
export default Filter;
