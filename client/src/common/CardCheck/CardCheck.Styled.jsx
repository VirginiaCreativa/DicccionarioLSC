import styled from 'styled-components';

export const CardWarpper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 80px;
  margin: 8px;
  background-color: #fff;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  img {
    height: 42px;
  }
`;

export const IconCheck = styled.i`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: var(--blue_medium);
  border-radius: 100%;
  opacity: 0;
  transition: all 0.2s ease-in;
  &.bx {
    color: #fff;
    font-size: 12px;
  }
`;

export const StyleCard = styled.div`
  position: absolute;
  top: -1;
  left: -1;
  width: 72px;
  height: 80px;
  border: 2px solid var(--gray_2);
  border-radius: 6px;
  transition: all 0.2s ease-in;
`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 80px;
  height: 100px;
  cursor: pointer;
  opacity: 0;
  &:checked {
    &.Show {
      ~ ${StyleCard} {
        border: 2px solid var(--blue_medium);
        ${IconCheck} {
          opacity: 1;
        }
      }
    }
  }
`;
