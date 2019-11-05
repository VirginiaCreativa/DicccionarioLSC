import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Menus from './Menus/Menus';

const Layout = ({ children }) => {
  const [onShowMenu, setShowMeu] = useState(true);
  const isMenuActive = useSelector(state => state.Getting.activeMenu);

  useEffect(() => {
    setShowMeu(isMenuActive);
  }, [isMenuActive]);

  const OverlayStyle = {
    position: 'absolute',
    zIndex: '9999',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundSize: 'cover',
  };
  return (
    <>
      {onShowMenu && (
        <div style={OverlayStyle}>
          <Menus />
        </div>
      )}
      <Header />
      <main>
        <>{children}</>
      </main>
    </>
  );
};

export default Layout;
