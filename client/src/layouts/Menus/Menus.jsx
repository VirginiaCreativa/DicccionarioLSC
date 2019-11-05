import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import classes from './Menus.module.scss';

import { getMenuActive } from '../../redux/actions/GettingAction.js';

const Menus = () => {
  const [onMarkNotif, setMarkNotif] = useState(true);
  const [onVocab, setVocab] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const Li = styled.li`
    display: flex;
    margin-right: 26px;
    line-height: 3.2;
    cursor: pointer;
  `;
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
      <div className={classes.Heading}>
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
      </div>
      <div className={classes.Navs}>
        <ul className="list-unstyled">
          <Li>
            <h4 style={pUppe}>Vocabularios</h4>
          </Li>
          <Li>
            <h4 style={pUppe}>Marcadores</h4>
          </Li>
          <Li>
            <h4 style={pUppe}>Desconectar</h4>
          </Li>
          <Li>
            <h4 style={pUppe}>Vocabularios</h4>
          </Li>
        </ul>
      </div>
    </div>
  );
};

export default Menus;
