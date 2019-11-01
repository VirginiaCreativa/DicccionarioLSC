import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = ({ heighted }) => (
  <>
    <div className={classes.SpinnerWrapper} style={{ height: heighted }}>
      <div className={classes.Spinner} />
    </div>
  </>
);

export default Spinner;
