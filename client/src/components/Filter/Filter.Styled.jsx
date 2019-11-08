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
  margin-bottom: 20px;

  h2 {
    position: relative;
    margin-bottom: 16px;
    color: #134fa3;
    font-size: 1.125rem;

    &::after {
      display: block;
      width: 100%;
      margin: 10px 0;
      border-bottom: 2px solid #f3f4f5;
      content: '';
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 6%;
      border-bottom: 2px solid #2572dd;
      content: '';
    }
  }
`;

export const BoxFilters = styled.div`
  display: inline-flex;
`;
