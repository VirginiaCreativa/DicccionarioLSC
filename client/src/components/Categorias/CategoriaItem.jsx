import React from 'react';
import { Item, IconCat, Title } from './Categorias.Styled';

const CategoriaItem = ({ title, onClick, icon }) => (
  <Item onClick={onClick}>
    <IconCat className={`bx ${icon}`} />
    <Title>{title}</Title>
  </Item>
);

export default CategoriaItem;
