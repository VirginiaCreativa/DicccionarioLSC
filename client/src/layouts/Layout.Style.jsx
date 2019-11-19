import styled, { keyframes } from 'styled-components';

export const LayoutComp = styled.div`
  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(22, 46, 104, 0.95);
    background-size: cover;
    transition: all 0.2s ease-in;
  }

  .onOverlay {
    transform: scale(1);
    opacity: 1;
  }

  .offOverlay {
    z-index: -9999;
    transform: scale(0.5);
    opacity: 0;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: ${props => props.height};
  transition: all 0.3s ease-in;

  &.mainDown {
    justify-content: center;
  }

  &.mainUp {
    justify-content: start;
  }
`;

export const HeaderComp = styled.div`
  margin: 30px 20px;

  button {
    line-height: 0;
    background-color: transparent;
    border: none;
  }

  .bx {
    color: var(--gray_medium);
    font-size: 24px;

    &:hover {
      color: $blue;
    }
  }
`;

export const MenusComp = styled.div`
  margin: 30px 20px;
`;

export const MenusClose = styled.button`
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;
  transition: all 0.1s ease-in-out;
  .bx {
    color: #fff;
    font-size: 60px;
    transform: rotate(0);
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--red);
      transform: rotate(90deg);
    }
  }
`;

export const MenusPerfil = styled.div`
  display: flex;
  padding: 6px 0 10px;
  line-height: 2.3;
  img {
    width: 30px;
    height: 30px;
    margin-right: 9px;
    border: 2px solid #ddd;
    border-radius: 100%;
  }
  p {
    margin-bottom: 0;
    color: #fff;
    font-size: 0.875rem;
  }
`;
export const MenusImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 9px;
  border: 2px solid #ddd;
  border-radius: 100%;
`;
export const MenusP = styled.p`
  margin-bottom: 0;
  color: #fff;
  font-size: 0.875rem;
`;

export const MenusNavs = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 60vh;

  ul {
    li {
      text-align: center;

      a {
        color: #fff;
        font-weight: 500;
        font-size: 2rem;
        text-transform: uppercase;

        &:hover {
          color: $blue;
        }
      }

      p {
        color: #bfbfbf;
      }

      &.bx {
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        transition: all 0.3s ease-in;

        &:hover {
          color: $red;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 40px;

  p {
    color: #bfbfbf;
  }

  .BottomRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    ul {
      li {
        a {
          color: #fff;
        }
      }
    }
  }
`;

export const FooterBottomLeft = styled.div`
  h5 {
    color: #fff;
  }
  a {
    color: var(--blue);
  }
  ul {
    margin-top: 8px;

    li {
      .bx {
        color: #fff;
        font-size: 24px;
      }
    }
  }
`;

export const FooterBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  ul {
    li {
      a {
        color: #fff;
      }
    }
  }
`;

export const SearchComp = styled.div`
  margin-bottom: 40px;
`;

const OnFi = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const OffFi = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;w
  }
`;

export const Filters = styled.div`
  margin-top: 30px;
  &.Show {
    animation: ${OnFi} 0.2s forwards;
  }
  &.Hide {
    animation: ${OffFi} 0.2s forwards;
  }
`;
