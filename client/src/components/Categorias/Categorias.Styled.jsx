import styled, { keyframes } from 'styled-components';

const OnFi = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const OffFi = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  &.Show {
    animation: ${OnFi} 0.3s forwards;
  }
  &.Hide {
    animation: ${OffFi} 0.3s forwards;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 140px;
  margin: 0 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: var(--boxshadow);
  transform: scale(1);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.05) translateY(-10px);
    i {
      &.bx {
        top: 0;
        color: #2572dd;
      }
    }
    p {
      opacity: 1;
    }
  }
`;

export const IconCat = styled.i`
  &.bx {
    position: relative;
    top: 15px;
    color: var(--gray_dark);
    font-size: 34px !important;
    transition: all 0.3s ease-in;
    &:hover {
      color: var(--blue);
    }
  }
`;

export const Title = styled.p`
  margin: 4px 0 0;
  color: var(--gray_dark);
  opacity: 0;
  transition: all 0.3s ease-out;
`;
