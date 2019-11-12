import React from 'react';

const ButtonSecondary = ({ children, onClick }) => (
  <button type="button" className="btn btn-secondary" onClick={onClick}>
    {children}
  </button>
);

export default ButtonSecondary;
