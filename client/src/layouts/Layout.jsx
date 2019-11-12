import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import classes from './Layout.module.scss';

import Header from './Header';
import Menus from './Menus';
import Search from './Search';

const Layout = ({ children }) => {
  const isMenuActive = useSelector(state => state.Getting.activeMenu);
  const location = useLocation();

  return (
    <div className={classes.Layout}>
      {/* ==== MENUS ==== */}
      <div
        className={
          isMenuActive
            ? [classes.Overlay, classes.onOverlay].join(' ')
            : [classes.Overlay, classes.offOverlay].join(' ')
        }>
        <Menus />
      </div>
      {/* ==== HEADER ==== */}
      <Header />
      {/* ==== MAIN ==== */}
      <div className="container">
        <main
          className={
            location.pathname === '/' ? classes.mainDown : classes.mainUp
          }>
          <Search />
          <>{children}</>
        </main>
      </div>
    </div>
  );
};

export default Layout;
