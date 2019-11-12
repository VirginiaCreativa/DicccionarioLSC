import React from 'react';

const ButtonSuccess = ({ children, onClick }) => (
  <button type="button" className="btn btn-success" onClick={onClick}>
    {children}
  </button>
);

export default ButtonSuccess;
