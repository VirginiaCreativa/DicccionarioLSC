import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import SkyLight from 'react-skylight';
import classes from './Layout.module.scss';

import SearchCommon from '../common/Search/Search';
import IconArrow from '../common/Arrow/Arrow';
import Filters from '../components/Filters/Filters';

const Search = () => {
  const [onFilter, setOnFilter] = useState(true);
  const history = useHistory();
  let animated;

  // useEffect(() => {
  //   animated.show();
  // });

  const changeSearch = ev => {
    console.log(ev.target.value);
  };

  const SkyLightStyled = {
    width: '70%',
    marginTop: '-445px',
    marginLeft: '-35%',
  };

  const handleOnFilters = () => {
    setOnFilter(!onFilter);
  };
  const handleSubmitFilter = () => {
    animated.hide();
    history.push('/resultado');
  };

  const Div = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    margin-bottom: 60px;
  `;

  return (
    <Div>
      <SearchCommon onChange={changeSearch} onFilter={handleOnFilters} />
      {onFilter && (
        <div className={classes.Filters}>
          <button type="button" className={classes.BoxFilter}>
            Forma de la mano
            <IconArrow height="10px" width="10px" rotate="90" />
          </button>
          <button type="button" className={classes.BoxFilter}>
            Ubicación del cuerpo
            <IconArrow height="10px" width="10px" rotate="90" />
          </button>
          <button type="button" className={classes.BoxFilter}>
            Temas
            <IconArrow height="10px" width="10px" rotate="90" />
          </button>
          <button type="button" className={classes.BoxFilter}>
            Uso
            <IconArrow height="10px" width="10px" rotate="90" />
          </button>
        </div>
      )}
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
