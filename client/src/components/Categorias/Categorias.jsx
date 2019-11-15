import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Items } from './Categorias.Styled';
import CategoriasData from '../../assets/Data/Categorias';
import Item from './CategoriaItem';

const Categorias = () => {
  const isFilterActive = useSelector(state => state.Getting.activeFilter);
  const history = useHistory();

  return (
    <Items className={isFilterActive ? 'Show' : 'Hide'}>
      {CategoriasData.map(item => (
        <Item
          key={item.id}
          {...item}
          onClick={() => history.push(`${item.path}`)}
        />
      ))}
    </Items>
  );
};

export default Categorias;
