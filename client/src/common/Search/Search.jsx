import React from 'react';
import { BoxSearch, SearchInp, Icon, Filter } from './Search.Styled';

const SearchCommon = ({ onSubmit, onChange, value, onFilter }) => (
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
      <i className="bx bx-slider-alt" />
    </Filter>
  </BoxSearch>
);

export default SearchCommon;
