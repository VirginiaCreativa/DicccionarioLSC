import React from 'react';

const ButtonSecondary = ({ children, onClick, active }) => (
  <button
    type="button"
    className="btn btn-secondary"
    onClick={onClick}
    style={{ backgroundColor: `${active}` }}>
    {children}
  </button>
);

export default ButtonSecondary;
