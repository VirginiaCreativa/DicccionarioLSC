import React from 'react';

import styled from 'styled-components';
import IconArrow from '../../common/Arrow/Arrow';

const Button = ({ children }) => {
  const Button = styled.button`
    margin: 0 5px;
    padding: 15px 10px;
    color: #fff;
    line-height: 0;
    background-color: var(--blue);
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: var(--blue_medium);
    }
  `;
  return (
    <Button type="button">
      {children}
      <IconArrow height="10px" width="10px" rotate="90" />
    </Button>
  );
};

export default Button;
