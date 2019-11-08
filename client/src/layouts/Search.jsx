import React from 'react';
import SkyLight from 'react-skylight';
import Search from '../common/Search/Search';
import Filter from '../components/Filter/Filter';

const Searching = () => {
  let animated;
  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  const handleFilter = () => {
    console.log('CLICK');
  };

  const SkyLightStyled = {
    width: '70%',
    height: '90vh',
    marginTop: '-450px',
    marginLeft: '-35%',
  };

  return (
    <div style={{ marginBottom: '60px' }}>
      <Search onChange={changeSearch} onFilter={() => animated.show()} />
      <SkyLight
        hideOnOverlayClicked
        dialogStyles={SkyLightStyled}
        ref={ref => (animated = ref)}
        transitionDuration={400}>
        <Filter />
      </SkyLight>
    </div>
  );
};

export default Searching;
