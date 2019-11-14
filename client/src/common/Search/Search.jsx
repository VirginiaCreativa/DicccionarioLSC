import React from 'react';
import { useSelector } from 'react-redux';
import { BoxSearch, SearchInp, Icon, Filter } from './Search.Styled';

const SearchCommon = ({ onSubmit, onChange, value, onFilter }) => {
  const hasFilterActive = useSelector(state => state.Getting.activeFilter);
  return (
    <BoxSearch>
      <Icon className="bx bx-search-alt" />
      <SearchInp
        type="text"
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        name="search"
        aria-label="Buscador"
      />
      <Filter type="button" onClick={onFilter} aria-label="ButtonFilter">
        <i
          className={['bx bx-slider-alt', hasFilterActive ? 'active' : ''].join(
            ' '
          )}
        />
      </Filter>
    </BoxSearch>
  );
};

export default SearchCommon;
