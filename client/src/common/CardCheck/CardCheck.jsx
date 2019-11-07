import React from 'react';
import styled from 'styled-components';

const CardCheck = ({ value, img, width, heigth }) => {
  const CardWarpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    height: ${props => props.heigth};
    margin: 0 10px;
    padding: 20px;
    background-color: #ddd;
    border-radius: 6px;
    &:last-child {
    }
  `;
  const Check = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    ~ img {
      height: 40px;
    }
  `;
  return (
    <CardWarpper heigth={heigth} width={width}>
      <Check
        type="checkbox"
        value={value}
        arial-label="checked"
        checked="checked"
      />
      <img src={img} alt={value} />
    </CardWarpper>
  );
};
export default CardCheck;
