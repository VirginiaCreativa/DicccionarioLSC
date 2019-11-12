import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import SkyLight from 'react-skylight';

import SearchCommon from '../common/Search/Search';
import Filters from '../components/Filters/Filters';

const Search = () => {
  const history = useHistory();
  let animated;

  const changeSearch = ev => {
    console.log(ev.target.value);
  };

  const SkyLightStyled = {
    width: '70%',
    marginTop: '-445px',
    marginLeft: '-35%',
  };

  const handleSubmitFilter = () => {
    animated.hide();
    history.push('/resultado');
  };

  const Div = styled.div`
    margin-bottom: 60px;
  `;

  return (
    <Div>
      <SearchCommon onChange={changeSearch} onFilter={() => animated.show()} />
      <SkyLight
        hideOnOverlayClicked
        dialogStyles={SkyLightStyled}
        ref={ref => (animated = ref)}
        transitionDuration={400}>
        <Filters onClick={handleSubmitFilter} />
      </SkyLight>
    </Div>
  );
};

export default Search;
