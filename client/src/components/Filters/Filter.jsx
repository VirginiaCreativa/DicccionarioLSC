import React from 'react';
import { BoxFilters, BoxFilter } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

const Filter = ({ items, onChange }) => (
  <BoxFilters>
    <BoxFilter>
      {items.map(mano => (
        <CardCheck key={mano.id} {...mano} onChange={onChange} />
      ))}
    </BoxFilter>
  </BoxFilters>
);

export default Filter;
