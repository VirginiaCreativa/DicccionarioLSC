import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IconArrow from '../../../common/Arrow/Arrow';

const ButtonFilter = ({ children, onClick, active, activeColor }) => {
  const hasOptionActive = useSelector(state => state.Getting.activeFilter);
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
    }
    .bgIcon {
      margin-right: 10px;
    }
  `;
  return (
    <Button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: `${active}`, color: `${activeColor}` }}>
      <IconArrow height="8px" width="8px" rotate="90" className="bgIcon" />
      {children}
    </Button>
  );
};

export default ButtonFilter;
