import styled from 'styled-components';

export const BoxSearch = styled.div`
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 38px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid var(--gray_2);
  border-left: none;
  border-radius: 6px;
`;

export const Icon = styled.i`
  position: absolute;
  top: 12px;
  left: 12px;
  &.bx {
    color: #a3a9af;
    font-size: 22px;
  }
`;
export const Filter = styled.button`
  margin-left: 10px;
  padding: 0;
  background-color: transparent;
  border: none;
  .bx {
    color: var(--gray_medium);
    font-size: 24px;
    &:hover {
      color: var(--blue_medium);
    }
    &.active {
      color: var(--blue_medium);
    }
  }
`;
