import styled from 'styled-components';

export const BoxSearch = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SearchInp = styled.input`
  width: 300px;
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
