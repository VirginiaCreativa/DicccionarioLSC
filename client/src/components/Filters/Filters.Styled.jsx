import styled, { keyframes } from 'styled-components';

export const Filters = styled.div`
  h4 {
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

export const GroupCard = styled.div``;

export const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  position: relative;
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

export const SpanUso = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 160px;
  height: 70px;
  border: 2px solid var(--gray_1);
  border-radius: 6px;
  transition: all 0.2s ease-in;
`;

export const IconCheck = styled.i`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: var(--blue_medium);
  border-radius: 100%;
  opacity: 0;
  transition: all 0.2s ease-in;
  &.bx {
    color: #fff;
    font-size: 12px;
  }
`;

export const BoxUso = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 70px;
  margin: 0 10px;
  text-transform: capitalize;
  background-color: #fff;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const InputUso = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 160px;
  height: 70px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  opacity: 0;
  &:hover {
    ~ ${SpanUso} {
      border: 2px solid var(--blue_medium);
    }
  }
  &:checked {
    ~ ${SpanUso} {
      border: 2px solid var(--blue_medium);
      ${IconCheck} {
        opacity: 1;
      }
    }
  }
`;

export const IconUso = styled.div`
  display: block;
  margin-right: 10px;
  img {
    display: block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    opacity: 0.2;
  }
`;

export const Checkmark = styled.div`
  position: absolute;
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: 2px;
  border: 2px solid var(--gray_1);
  border-radius: 4px;
  transition: all 0.3s ease-in;
  .bx {
    position: relative;
    top: -7.5px;
    left: -1px;
    color: #fff;
    font-size: 12px;
  }
`;

export const UlTemas = styled.ul`
  margin: 0 20px;
  column-count: 4;
  column-gap: 20px;
  li {
    position: relative;
    display: flex;
    margin-bottom: 12px;
    label {
      margin: 0;
      padding: 0;
      padding-left: 24px;
      font-size: 0.8rem;
    }
    input {
      &:hover {
        ${Checkmark} {
          background-color: var(--blue_medium);
          border: 2px solid var(--blue_medium);
        }
      }
    }
  }
`;

export const InputTemas = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: pointer;
  opacity: 0;
  &:checked {
    ~ ${Checkmark} {
      background-color: var(--blue_medium);
      border: 2px solid var(--blue_medium);
    }
  }
  &:hover {
    ~ ${Checkmark} {
      background-color: var(--blue_medium);
      border: 2px solid var(--blue_medium);
    }
  }
`;

export const Tags = styled.div`
  margin: 6px 0;
`;
