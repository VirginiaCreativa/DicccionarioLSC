import React from 'react';
import { useDispatch } from 'react-redux';
import { HeaderComp } from './Layout.Style';
import Logo from '../common/Logo/LogoIcon';

import { getMenuActive } from '../redux/actions/GettingAction.js';

const Header = () => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(getMenuActive(true));
  };
  return (
    <HeaderComp>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button type="button" aria-label="Menus" onClick={handleMenu}>
              <i className="bx bx-menu-alt-right" />
            </button>
          </div>
        </div>
      </div>
    </HeaderComp>
  );
};

export default Header;
