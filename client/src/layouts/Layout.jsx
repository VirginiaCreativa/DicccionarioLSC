import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Layout.module.scss';

import Header from './Header/Header';
import Menus from './Menus/Menus';

const Layout = ({ children }) => {
  const isMenuActive = useSelector(state => state.Getting.activeMenu);

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
      <main>
        <>{children}</>
      </main>
    </div>
  );
};

export default Layout;
