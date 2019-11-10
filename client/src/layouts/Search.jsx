import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import SkyLight from 'react-skylight';

import Search from '../common/Search/Search';
import Filter from '../components/Filter/Filter';

import { getSearchPrepos } from '../redux/actions/GettingAction.js';

const Searching = ({ prepos }) => {
  const isSearchPrepos = useSelector(state => state.Getting.prepos);
  const dispatch = useDispatch();
  const history = useHistory();
  let animated;

  useEffect(() => {
    dispatch(getSearchPrepos(true));
  }, [dispatch]);

  const changeSearch = ev => {
    console.log(ev.target.value);
  };

  const SkyLightStyled = {
    width: '70%',
    marginTop: '-420px',
    marginLeft: '-35%',
  };

  const handleSubmitFilter = () => {
    animated.hide();
    history.push('/resultado');
  };

  const Searching = styled.div`
    margin-bottom: 60px;
  `;

  return (
    <Searching>
      <Search onChange={changeSearch} onFilter={() => animated.show()} />
      <SkyLight
        hideOnOverlayClicked
        dialogStyles={SkyLightStyled}
        ref={ref => (animated = ref)}
        transitionDuration={400}>
        <Filter onClick={handleSubmitFilter} />
      </SkyLight>
    </Searching>
  );
};

export default Searching;
