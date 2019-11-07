import React from 'react';

import Search from '../common/Search/Search';

const Searching = () => {
  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  const handleFilter = () => {
    console.log('CLICK');
  };
  return (
    <div style={{ marginBottom: '60px' }}>
      <Search onChange={changeSearch} onClick={handleFilter} />
    </div>
  );
};

export default Searching;
