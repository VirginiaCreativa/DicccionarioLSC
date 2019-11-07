import React from 'react';
import styled from 'styled-components';

const Search = ({ onSubmit, onChange, value, onFilter }) => {
  const BoxSearch = styled.div`
    position: relative;
    display: flex;
    width: 400px;
  `;

  const Search = styled.input`
    width: 100%;
    padding: 10px 10px 10px 38px;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #ddd;
    border-left: none;
    border-radius: 6px;
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
          color: #134fa3;
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
};

export default Search;
