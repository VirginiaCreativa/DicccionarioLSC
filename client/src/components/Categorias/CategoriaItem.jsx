import React from 'react';
import styled from 'styled-components';

const CategoriaItem = ({ tema, onClick }) => {
  const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    margin: 0 6px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
  `;
  return (
    <Item onClick={onClick}>
      <h3>{tema}</h3>
    </Item>
  );
};

export default CategoriaItem;
