import React from 'react';
import { Item } from './CategoriaItem.Styled';

const CategoriaItem = ({ title, onClick, icon }) => (
  <Item onClick={onClick}>
    <i className={`bx ${icon}`} />
    <p>{title}</p>
  </Item>
);

export default CategoriaItem;
