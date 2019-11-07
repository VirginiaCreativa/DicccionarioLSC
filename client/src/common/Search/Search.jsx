import React from 'react';
import styled from 'styled-components';

const Search = ({ onChange, value, onClick }) => {
  const BoxSearch = styled.div`
    position: relative;
    display: flex;
    width: 320px;
  `;

  const Search = styled.input`
    width: 100%;
    padding: 8px 10px 8px 38px;
    border: none;
    border-radius: 4px;
  `;

  const Icon = styled.i`
    position: absolute;
    top: 10px;
    left: 8px;
    &.bx {
      color: #a3a9af;
      font-size: 22px;
    }
  `;
  const Filter = styled.button`
    margin-left: 10px;
    padding: 0;
    background-color: transparent;
    border: none;
    i {
      &.bx {
        color: #a3a9af;
        font-size: 24px;
        &:hover {
          color: #162e68;
        }
      }
    }
  `;
  return (
    <BoxSearch>
      <Icon className="bx bx-search-alt" />
      <Search
        type="text"
        value={value}
        onChange={onChange}
        name="search"
        aria-label="Buscador"
      />
      <Filter type="button" onClick={onClick} aria-label="ButtonFilter">
        <i className="bx bx-slider-alt" />
      </Filter>
    </BoxSearch>
  );
};

export default Search;
