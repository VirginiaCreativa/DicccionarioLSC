import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [onNavBar, setOnNavBar] = useState(false);
  const navStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    lineHeight: '0',
  };
  const BoxNavBar = styled.div`
    position: absolute;
    background-color: #ced6e0;
    padding: 10px 0;
  `;
  const handleShowNavBar = () => {
    setOnNavBar(!onNavBar);
  };
  return (
    <>
      <button type="button" style={navStyle} onClick={handleShowNavBar}>
        <box-icon name="menu-alt-right" color="#a3a9af" />
      </button>
      {onNavBar && (
        <BoxNavBar>
          <p>Virginia Velásquez Soto</p>
        </BoxNavBar>
      )}
    </>
  );
};

export default Navbar;
