import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { LayoutComp, Main } from './Layout.Style';

import Header from './Header';
import Menus from './Menus';
import Search from './Search';

const Layout = ({ children }) => {
  const isMenuActive = useSelector(state => state.Getting.activeMenu);
  const hasActiveFilter = useSelector(state => state.Getting.activeFilter);
  const location = useLocation();

  return (
    <LayoutComp>
      {/* ==== MENUS ==== */}
      <div
        className={
          isMenuActive
            ? ['Overlay', 'onOverlay'].join(' ')
            : ['Overlay', 'offOverlay'].join(' ')
        }>
        <Menus />
      </div>
      {/* ==== HEADER ==== */}
      <Header />
      {/* ==== MAIN ==== */}
      <div className="container">
        <Main
          className={location.pathname === '/' ? 'mainDown' : 'mainUp'}
          height={hasActiveFilter ? '89vh' : '58vh'}>
          <Search />
          <>{children}</>
        </Main>
      </div>
    </LayoutComp>
  );
};

export default Layout;
