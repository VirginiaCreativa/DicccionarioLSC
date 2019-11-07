import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import classes from './Layout.module.scss';

import { getMenuActive } from '../redux/actions/GettingAction.js';

const Menus = () => {
  const dispatch = useDispatch();

  const BoxNavItem = styled.div`
    display: flex;
    padding: 6px 0 10px;
    line-height: 2.3;
  `;
  const Image = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 9px;
    border: 2px solid #ddd;
    border-radius: 100%;
  `;
  const P = styled.p`
    margin-bottom: 0px;
    color: #fff;
    font-size: 0.875rem;
  `;

  const handleMenu = () => {
    dispatch(getMenuActive(false));
  };
  return (
    <div className={classes.Menus}>
      <header className={classes.Heading}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <BoxNavItem>
                <Image src="https://i.pravatar.cc/40" alt="Profile" />
                <P>Virginia Velásquez Soto</P>
              </BoxNavItem>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button
                type="button"
                aria-label="Cerrar"
                onClick={handleMenu}
                className={classes.btnClose}>
                <i className="bx bx-x" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={classes.Navs}>
        <ul className="list-unstyled">
          <li style={{ marginBottom: '60px' }}>
            <Link to="/" onClick={() => dispatch(getMenuActive(false))}>
              Home
            </Link>
          </li>
          <li style={{ marginBottom: '60px' }}>
            <Link
              to="/vocabulario"
              onClick={() => dispatch(getMenuActive(false))}>
              Tu vocabulario
            </Link>
            <p>Añadir cada una seña para imprimir</p>
          </li>
          <li style={{ marginBottom: '60px' }}>
            <Link
              to="/marcadores"
              onClick={() => dispatch(getMenuActive(false))}>
              Tus Marcadores
            </Link>
            <p>Añadir señas para guardarlas</p>
          </li>
          <li style={{ marginTop: '60px' }}>
            <i className="bx bx-log-out-circle" />
          </li>
        </ul>
      </div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className={classes.BottomLeft}>
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
              </div>
            </div>
            <div className="col-6">
              <div className={classes.BottomRight}>
                <div className={classes.BoxPages}>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menus;
