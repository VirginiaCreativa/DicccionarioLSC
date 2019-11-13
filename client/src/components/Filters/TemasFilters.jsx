import React from 'react';
import { Group, Select, Option, Icon } from './Filters.Styled';

const TemasFilter = ({ items, onChange, valueSelect }) => (
  <Group>
    <Icon className="bx bx-down-arrow" />
    <Select value={valueSelect} onChange={onChange}>
      {items.map(item => (
        <Option
          value={item.tema}
          key={item.id}
          aria-label={item.tema}
          {...item}>
          {item.tema.charAt(0).toUpperCase() + item.tema.slice(1)}
        </Option>
      ))}
    </Select>
  </Group>
);

export default TemasFilter;
