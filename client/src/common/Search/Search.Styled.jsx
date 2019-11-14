import styled from 'styled-components';

export const BoxSearch = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 600px;
`;

export const SearchInp = styled.input`
  width: 60%;
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
  left: 19%;
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
