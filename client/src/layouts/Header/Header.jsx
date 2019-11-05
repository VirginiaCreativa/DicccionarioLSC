import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';

const Header = () => {
  const Div = styled.div`
    margin: 10px 0;
  `;

  const handleMenu = () => {};
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
