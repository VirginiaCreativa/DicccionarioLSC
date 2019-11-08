import styled from 'styled-components';

export const Item = styled.div`
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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
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
