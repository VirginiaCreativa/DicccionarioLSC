import React from 'react';
import icon from '../../assets/logo/icon_2x.svg';

const LogoIcon = () => {
  const iconStyle = {
    height: '35px',
  };

  return (
    <>
      <img src={icon} alt="" style={iconStyle} />
    </>
  );
};

export default LogoIcon;
