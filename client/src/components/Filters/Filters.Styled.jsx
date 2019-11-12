import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.425rem;
  text-align: center;
  text-transform: uppercase;

  span {
    font-weight: 300;
  }
`;

export const GroupFilter = styled.div`
  margin-bottom: 10px;

  h2 {
    position: relative;
    margin-bottom: 16px;
    color: var(--blue_medium);
    font-size: 1.125rem;

    &::after {
      display: block;
      width: 100%;
      margin: 10px 0;
      border-bottom: 2px solid var(--gray_1);
      content: '';
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 6%;
      border-bottom: 2px solid var(--blue_medium);
      content: '';
    }
  }
`;

export const Selections = styled.div`
  display: flex;
`;

export const BoxFilters = styled.div`
  padding: 10px 0;
  overflow: scroll;
  scrollbar-color: transparent transparent;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxFilter = styled.div`
  display: inline-flex;
`;
