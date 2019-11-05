import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';
import NavBar from './Navbar/Navbar';

const Header = () => {
  const Div = styled.div`
    margin: 20px 0;
  `;
  return (
    <Div>
      <div className="container-full">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <NavBar />
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Header;
