import styled from 'styled-components';

export const BoxSearch = styled.div`
  position: relative;
  display: flex;
  width: 400px;
`;

export const SearchInp = styled.input`
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
  top: 10px;
  left: 8px;
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
  i {
    &.bx {
      color: #a3a9af;
      font-size: 24px;
      &:hover {
        color: #134fa3;
      }
    }
  }
`;
