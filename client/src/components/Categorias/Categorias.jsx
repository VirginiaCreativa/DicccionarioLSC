/* eslint-disable react/jsx-props-no-spreading */
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
      title: 'Temas',
      icon: 'bx-cabinet',
      page: 'temas',
    },
    {
      id: 2,
      title: 'Alfabeto',
      icon: 'bx-font-family',
      page: 'alfabeto',
    },
    {
      id: 3,
      title: 'Números',
      icon: 'bx-hash',
      page: 'numeros',
    },
    {
      id: 4,
      title: 'Cordiales',
      icon: 'bx-chat',
      page: 'cordiales',
    },
    {
      id: 5,
      title: 'Orientar',
      icon: 'bx-receipt',
      page: 'orientar',
    },
  ];
  return (
    <Items>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Items>
  );
};

export default Categorias;
