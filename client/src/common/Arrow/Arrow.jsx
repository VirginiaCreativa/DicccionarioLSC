import React from 'react';
import styled from 'styled-components';

import arrow from '../../assets/Icons/arrow_white.svg';

const Arrow = ({ height, width, rotate, className }) => {
  const Img = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    color: #fff;
    transform: rotate(${props => props.rotate}deg);
    fill: #fff;
  `;
  return (
    <Img
      className={className}
      width={width}
      height={height}
      rotate={rotate}
      alt="icon arrow"
      src={arrow}
    />
  );
};
export default Arrow;
