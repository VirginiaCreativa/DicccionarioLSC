import React from 'react';

const ButtonSuccess = ({ children, onClick }) => (
  <button type="button" className="btn btn-primary" onClick={onClick}>
    {children}
  </button>
);

export default ButtonSuccess;
