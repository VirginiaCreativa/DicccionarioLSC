import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SearchComp, Filters } from './Layout.Style';

import { getFilterActive } from '../redux/actions/GettingAction.js';
import SearchCommon from '../common/Search/Search';
import Button from './UI/Button';

import FiltersOptions from '../components/Filters/Filters';

const Search = () => {
  const [onFilter, setOnFilter] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  let animated;

  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  const handleFilters = ev => {
    setOnFilter(!onFilter);
  };

  const handleSubmitFilter = () => {
    animated.hide();
    history.push('/resultado');
  };

  return (
    <SearchComp>
      <SearchCommon onChange={changeSearch} onFilter={handleFilters} />

      <Filters>
        <div
          className={
            onFilter ? 'OnFilters' : ['OffFiltres', 'hideFilter'].join(' ')
          }>
          <FiltersOptions />
        </div>
      </Filters>
    </SearchComp>
  );
};

export default Search;
