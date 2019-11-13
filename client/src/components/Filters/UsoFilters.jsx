import React from 'react';
import { Group, BoxRadio } from './Filters.Styled';

const FilterRadio = ({ items, onChange, valueSelect }) => (
  <Group>
    <BoxRadio>
      <select value={valueSelect} onChange={onChange}>
        {items.map(item => (
          <option
            value={item.tema}
            key={item.id}
            aria-label={item.tema}
            {...item}>
            {item.tema}
          </option>
        ))}
      </select>
    </BoxRadio>
  </Group>
);

export default FilterRadio;
