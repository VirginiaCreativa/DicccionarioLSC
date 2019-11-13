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
  margin-bottom: 15px;

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
  button {
    margin-right: 10px;
    margin-bottom: 6px;
    font-size: 0.8rem;
    line-height: 1;
    text-transform: uppercase;
    border: none;
  }
`;

export const GroupCard = styled.div`
  padding: 10px 0 0;
  overflow: scroll;
  scrollbar-color: transparent transparent;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxCard = styled.div`
  display: inline-flex;
`;

export const Group = styled.div`
  position: relative;
  padding: 10px 0 0;
`;

export const BoxRadio = styled.div`
  display: flex;
  padding: 10px 0 0;
`;

export const Icon = styled.i`
  position: absolute;
  top: 25px;
  right: 10px;
  z-index: 3;
  &.bx {
    color: var(--gray_medium);
  }
`;

export const Select = styled.select`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 15px 10px;
  color: #62717a;
  line-height: 14px;
  background-color: var(--body);
  border: 0;
  border-radius: 4px;
  appearance: none;
  option {
    padding: 10px;
  }
`;

export const Option = styled.option`
  padding: 10px;
`;
