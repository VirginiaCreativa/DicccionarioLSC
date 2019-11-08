import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import CategoriasData from '../../assets/Data/Categorias';
import Item from './CategoriaItem';

const Categorias = () => {
  const history = useHistory();
  const Items = styled.div`
    display: flex;
  `;

  return (
    <Items>
      {CategoriasData.map(item => (
        <Item key={item.id} {...item} onClick={() => history.push('/temas')} />
      ))}
    </Items>
  );
};

export default Categorias;
