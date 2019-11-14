import React from 'react';

import styled from 'styled-components';
import IconArrow from '../../../common/Arrow/Arrow';

const Button = ({ children }) => {
  const Button = styled.button`
    margin: 0 5px;
    padding: 15px 20px;
    color: var(--gray_dark);
    font-size: 0.825rem;
    line-height: 0;
    background-color: var(--gray_2);
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 6px;
    &:hover {
      color: #fff;
      background-color: var(--gray_dark);
      border-bottom: none;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }
    .bgIcon {
      margin-right: 10px;
    }
  `;
  return (
    <Button type="button">
      <IconArrow height="8px" width="8px" rotate="90" className="bgIcon" />
      {children}
    </Button>
  );
};

export default Button;
