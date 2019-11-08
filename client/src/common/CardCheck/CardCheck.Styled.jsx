import styled from 'styled-components';

export const CardWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px;
  padding: 20px;
  width: 80px;
  height: 100px;
  background-color: #fff;
  border: 2px solid #ced6e0;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  img {
    height: 42px;
  }
`;

export const SpanCard = styled.span`
  position: absolute;
  top: -1;
  left: -1;
  width: 80px;
  height: 100px;
  border-radius: 6px;
  border: 2px solid #ced6e0;
  transition: all 0.2s ease-in;
`;

export const IconCheck = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 4;
  opacity: 0;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: #134fa3;
  transition: all 0.2s ease-in;
  &.bx {
    color: #fff;
    font-size: 12px;
  }
`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  width: 80px;
  height: 100px;
  &:checked {
    ~ ${SpanCard} {
      border-radius: 6px;
      border: 2px solid #134fa3;
      ${IconCheck} {
        opacity: 1;
      }
    }
  }
  &:hover {
    ~ ${SpanCard} {
      border: 2px solid #134fa3;
      ${IconCheck} {
        opacity: 1;
      }
    }
  }
`;
