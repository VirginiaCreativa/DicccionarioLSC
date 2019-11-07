import React from 'react';
import styled from 'styled-components';

import Item from './CategoriaItem';

const Categorias = () => {
  const Items = styled.div`
    display: flex;
  `;

  const items = [
    {
      id: 1,
      tema: 'Temas',
      icon: 'https://image.flaticon.com/icons/svg/149/149330.svg',
      page: 'temas',
    },
    {
      id: 2,
      tema: 'Alfabetos',
      icon: 'https://image.flaticon.com/icons/svg/2219/2219077.svg',
      page: 'alfabetos',
    },
    {
      id: 3,
      tema: 'Numeros',
      icon: 'https://image.flaticon.com/icons/svg/106/106954.svg',
      page: 'numeros',
    },
    {
      id: 4,
      tema: 'Cordiales',
      icon: 'https://image.flaticon.com/icons/svg/159/159777.svg',
      page: 'cordiales',
    },
    {
      id: 5,
      tema: 'Notas para orientar',
      icon: 'https://image.flaticon.com/icons/svg/994/994410.svg',
      page: 'orientar',
    },
  ];
  return (
    <Items>
      {items.map(item => (
        <Item key={item.id} tema={item.tema} />
      ))}
    </Items>
  );
};

export default Categorias;
