import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import classes from './Menus.module.scss';

import { getMenuActive } from '../../redux/actions/GettingAction.js';

const Menus = () => {
  const [onMarkNotif, setMarkNotif] = useState(true);
  const [onVocab, setVocab] = useState(true);
  const history = useHistory();
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

  const pUppe = {
    textTransform: 'uppercase',
  };

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
                onClick={handleMenu}
                className={classes.btnClose}>
                <box-icon name="x" color="white" size="60px" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={classes.Navs}>
        <ul className="list-unstyled">
          <li style={{ marginBottom: '60px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginBottom: '60px' }}>
            <Link to="/">Tu vocabulario</Link>
          </li>
          <li style={{ marginBottom: '60px' }}>
            <Link to="/">Tus Marcadores</Link>
          </li>
          <li style={{ marginTop: '60px' }}>
            <box-icon name="log-out-circle" color="white" size="md" />
          </li>
        </ul>
      </div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className={classes.BoxContact}>
                <h5>Contáctenos</h5>
                <p>Complex Ruta N, Medellin, Colombia</p>
                <a href="mailto:info@ldlsc.com">info@yourdomain.com</a>
              </div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <box-icon name="facebook-square" type="logo" color="white" />
                </li>
                <li className="list-inline-item">
                  <box-icon name="instagram-alt" type="logo" color="white" />
                </li>
                <li className="list-inline-item">
                  <box-icon name="twitter" type="logo" color="white" />
                </li>
              </ul>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
              <p>© 2019 DLSC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menus;
