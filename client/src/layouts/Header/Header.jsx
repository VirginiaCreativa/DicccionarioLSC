import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';

import { getMenuActive } from '../../redux/actions/GettingAction.js';

const Header = () => {
  const dispatch = useDispatch();

  const Div = styled.div`
    margin: 10px 0;
  `;

  const handleMenu = () => {
    dispatch(getMenuActive(true));
  };
  return (
    <Div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button type="button" onClick={handleMenu}>
              <box-icon name="menu-alt-right" color="#a3a9af" />
            </button>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Header;
