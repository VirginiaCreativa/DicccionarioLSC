import React from 'react';
import styled from 'styled-components';

const CategoriaItem = ({ title, onClick, icon }) => {
  const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 160px;
    margin: 0 10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    transform: scale(1);
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
      i {
        &.bx {
          top: 0px;
          color: #2572dd;
        }
      }
      p {
        opacity: 1;
      }
    }
    i {
      &.bx {
        position: relative;
        top: 15px;
        color: #57606f;
        font-size: 34px;
        transition: all 0.3s ease-in;
        &:hover {
          color: #2572dd;
        }
      }
    }
    p {
      margin: 4px 0 0;
      color: #57606f;
      opacity: 0;
      transition: all 0.3s ease-out;
    }
  `;
  return (
    <Item onClick={onClick}>
      <i className={`bx ${icon}`} />
      <p>{title}</p>
    </Item>
  );
};

export default CategoriaItem;
