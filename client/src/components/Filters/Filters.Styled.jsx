import styled, { keyframes } from 'styled-components';

export const Filters = styled.div`
  position: relative;
  h3 {
    padding-bottom: 10px;
    text-align: center;
  }
`;

export const BtnOptions = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.425rem;
  text-align: center;
  text-transform: uppercase;
  span {
    font-weight: 300;
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

export const GroupCard = styled.div``;

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  position: relative;
  padding: 10px 0 0;
`;

export const Ul = styled.ul`
  margin: 0 20px;
  column-count: 4;
  column-gap: 20px;
  li {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    input {
      position: absolute;
      z-index: 3;
      overflow: hidden;
      outline: none;
      cursor: pointer;
      opacity: 0;
      &:checked {
        ~ span {
          background-color: var(--blue);
          border: none;
        }
      }
    }
    label {
      margin-bottom: 0;
      margin-left: 4px;
      font-size: 0.75rem !important;
    }
    span {
      position: absolute;
      top: 4px;
      left: 0;
      width: 12px;
      height: 12px;
      background-color: var(--gray_1);
      border: 2px solid var(--gray_2);
      border-radius: 2px;
      transition: all 0.3s ease-in;
    }
  }
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

const OnOption = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const OffOption = keyframes`
  0% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const OptionFilter = styled.div`
  position: relative;
  margin-top: 10px;
  &.Box {
    width: 736px;
    padding: 10px 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: var(--boxshadow);
    transition: all 0.3s ease-in;
  }
  &.Show {
    top: ${props => props.top};
    z-index: ${props => props.zindex};
    height: ${props => props.height};
    opacity: 1;
    ${BoxCard} {
      animation: ${OnOption} 0.6s forwards;
    }
  }
  &.Hide {
    top: 0;
    height: 0;
    opacity: 0;
    ${BoxCard} {
      animation: ${OffOption} 0.3s forwards;
    }
  }
`;
