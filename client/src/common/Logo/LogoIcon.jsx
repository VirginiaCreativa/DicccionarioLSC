import React from 'react';
import { useHistory } from 'react-router-dom';
import icon from '../../assets/logo/icon_2x.svg';

const LogoIcon = () => {
  const history = useHistory();
  const logoStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    margin: '0',
    lineHeight: '0',
  };
  const iconStyle = {
    height: '45px',
    cursor: 'pointer',
  };

  return (
    <button
      type="button"
      aria-label="Logo"
      style={logoStyle}
      onClick={() => history.push('/')}>
      <img src={icon} alt="" style={iconStyle} />
    </button>
  );
};

export default LogoIcon;
