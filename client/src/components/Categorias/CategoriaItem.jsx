import React from 'react';
import styled from 'styled-components';

const CategoriaItem = ({ tema }) => {
  const Item = styled.div`
    display: flex;
    padding: 20px;
  `;
  return (
    <Item>
      <h3>{tema}</h3>
    </Item>
  );
};

export default CategoriaItem;
