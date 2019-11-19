import styled, { keyframes } from 'styled-components';

export const Filters = styled.div`
  h3 {
    margin-bottom: 10px;
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
  justify-content: center;
  padding: 10px;
  button {
    margin-right: 10px;
    padding: 12px 14px;
    color: var(--gray_medium);
    font-size: 0.845rem;
    line-height: 0;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    &.active {
      padding: 12px 14px;
      color: #fff;
      background-color: var(--blue);
      border-radius: 20px;
    }
  }
`;

export const GroupCard = styled.div``;

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  position: relative;
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
  border-radius: 54px;
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
export const Options = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const OptionFilter = styled.div`
  position: absolute;
  top: 20px;
  &.Box {
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: var(--boxshadow);
    transition: all 0.3s ease-in;
  }
  &.Show {
    z-index: ${props => props.zindex};
    width: 100%;
    height: ${props => props.height};
    opacity: 1;
    ${BoxCard} {
      animation: ${OnOption} 0.6s forwards;
    }
  }
  &.Hide {
    width: 100%;
    height: 0;
    opacity: 0;
    ${BoxCard} {
      animation: ${OffOption} 0.3s forwards;
    }
  }
`;

export const TitleUbic = styled.h2`
  width: 100%;
  padding: 6px 10px;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--gray_1);
  &::after {
    position: relative;
    top: 8px;
    display: block;
    width: 10%;
    height: 2px;
    background-color: var(--blue);
    content: '';
  }
`;

export const GroupUso = styled.div`
  display: flex;
`;

export const BoxUso = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 70px;
  margin: 0 10px;
  text-transform: capitalize;
  background-color: #fff;
  border: 2px solid var(--gray_1);
  border-radius: 6px;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background-color: var(--blue);
  }
`;

export const IconUso = styled.div`
  display: block;
  width: 34px;
  height: 30px;
  margin-right: 10px;
  padding: 8px 9px;
  background-color: var(--blue);
  border-radius: 10px;
  img {
    display: block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
  }
`;
