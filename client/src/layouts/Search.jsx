import React from 'react';
import SkyLight from 'react-skylight';
import Search from '../common/Search/Search';
import Filter from './Filter';

const Searching = () => {
  let animated;
  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  const handleFilter = () => {
    console.log('CLICK');
  };
  return (
    <div style={{ marginBottom: '60px' }}>
      <Search onChange={changeSearch} onFilter={() => animated.show()} />
      <SkyLight
        hideOnOverlayClicked
        ref={ref => (animated = ref)}
        transitionDuration={400}>
        Filter
      </SkyLight>
    </div>
  );
};

export default Searching;
