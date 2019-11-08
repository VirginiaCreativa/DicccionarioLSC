import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SkyLight from 'react-skylight';

import Search from '../common/Search/Search';
import Filter from '../components/Filter/Filter';

const Searching = () => {
  const history = useHistory();
  let animated;
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
    margin-top: ${props => (props.prepos ? '0' : '300px')};
    margin-bottom: 60px;
    transition: all 0.3s ease-in;
  `;

  return (
    <Searching prepos={false}>
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
