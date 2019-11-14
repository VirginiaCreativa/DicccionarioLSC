import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  MenusComp,
  MenusNavs,
  MenusPerfil,
  MenusClose,
  Footer,
  FooterBottomLeft,
  FooterBottomRight,
} from './Layout.Style';

import { getMenuActive } from '../redux/actions/GettingAction.js';

const Menus = () => {
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(getMenuActive(false));
  };
  return (
    <MenusComp>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <MenusPerfil>
                <img src="https://i.pravatar.cc/40" alt="Profile" />
                <p>Virginia Velásquez Soto</p>
              </MenusPerfil>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <MenusClose
                type="button"
                aria-label="Cerrar"
                onClick={handleCloseMenu}>
                <i className="bx bx-x" />
              </MenusClose>
            </div>
          </div>
        </div>
      </header>
      <MenusNavs>
        <ul className="list-unstyled">
          <li
            style={{
              marginBottom: '60px',
            }}>
            <Link to="/" onClick={() => dispatch(getMenuActive(false))}>
              Home
            </Link>
          </li>
          <li
            style={{
              marginBottom: '60px',
            }}>
            <Link
              to="/vocabulario"
              onClick={() => dispatch(getMenuActive(false))}>
              Tu vocabulario
            </Link>
            <p>Añadir cada una seña para imprimir</p>
          </li>
          <li
            style={{
              marginBottom: '60px',
            }}>
            <Link
              to="/marcadores"
              onClick={() => dispatch(getMenuActive(false))}>
              Tus Marcadores
            </Link>
            <p>Añadir señas para guardarlas</p>
          </li>
          <li
            style={{
              marginTop: '60px',
            }}>
            <i className="bx bx-log-out-circle" />
          </li>
        </ul>
      </MenusNavs>
      <Footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <FooterBottomLeft>
                <h5>Contáctenos</h5>
                <p>Complex Ruta N, Medellin, Colombia</p>
                <a href="mailto:info@ldlsc.com">info@yourdomain.com</a>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="bx bxl-facebook-square" />
                  </li>
                  <li className="list-inline-item">
                    <i className="bx bxl-instagram" />
                  </li>
                  <li className="list-inline-item">
                    <i className="bx bxl-twitter" />
                  </li>
                </ul>
              </FooterBottomLeft>
            </div>
            <div className="col-6">
              <FooterBottomRight>
                <div className="BoxPages">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <Link
                        to="/apoyo"
                        onClick={() => dispatch(getMenuActive(false))}>
                        Apoyo
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="/legal"
                        onClick={() => dispatch(getMenuActive(false))}>
                        Legal
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="/equipo"
                        onClick={() => dispatch(getMenuActive(false))}>
                        Equipo
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p>
                    © 2019 DLSC. All Rights Reserved. Dev/Design:
                    @Virginia.Creativa
                  </p>
                </div>
              </FooterBottomRight>
            </div>
          </div>
        </div>
      </Footer>
    </MenusComp>
  );
};

export default Menus;
