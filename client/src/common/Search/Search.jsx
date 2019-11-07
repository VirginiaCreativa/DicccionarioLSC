import React from 'react';
import styled from 'styled-components';

const Search = ({ onChange, value }) => {
  const Search = styled.input`
    width: 30%;
    padding: 10px;
  `;

  return (
    <>
      <Search type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Search;
