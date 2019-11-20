import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SearchComp, Filters } from './Layout.Style';

import { getFilterActive } from '../redux/actions/GettingAction.js';
import SearchCommon from '../common/Search/Search';

import FiltersOptions from '../components/Filters/Filters';

const Search = () => {
  const [onFilter, setOnFilter] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const changeSearch = ev => {
    console.log(ev.target.value);
  };
  const handleFilters = ev => {
    dispatch(getFilterActive(false));
    setOnFilter(!onFilter);
    if (onFilter !== false) {
      dispatch(getFilterActive(true));
    }
  };

  const handleSubmit = () => {
    history.push('/buscar');
  };

  return (
    <SearchComp>
      <SearchCommon
        onChange={changeSearch}
        onFilter={handleFilters}
        onSubmit={handleSubmit}
        onKeyDown={ev => {
          if (ev.key === 'Enter') {
            handleSubmit();
          }
        }}
      />

      {onFilter && (
        <Filters className={onFilter ? 'Show' : 'Hide'}>
          <FiltersOptions />
        </Filters>
      )}
    </SearchComp>
  );
};

export default Search;
