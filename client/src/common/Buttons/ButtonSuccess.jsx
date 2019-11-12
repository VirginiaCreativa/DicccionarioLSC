import React from 'react';

const ButtonSuccess = ({ children, onClick, style }) => (
  <button
    type="button"
    className="btn btn-success"
    style={style}
    onClick={onClick}>
    {children}
  </button>
);

export default ButtonSuccess;
