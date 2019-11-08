import React from 'react';
import styled from 'styled-components';

import CategoriasData from '../../assets/Data/Categorias';
import Item from './CategoriaItem';

const Categorias = () => {
  const Items = styled.div`
    display: flex;
  `;

  return (
    <Items>
      {CategoriasData.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Items>
  );
};

export default Categorias;
