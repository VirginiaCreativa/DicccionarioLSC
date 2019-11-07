import React from 'react';

import Search from '../common/Search/Search';

const Searching = () => {
  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  return (
    <>
      <Search onChange={changeSearch} />
    </>
  );
};

export default Searching;
