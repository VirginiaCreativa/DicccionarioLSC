import React from 'react';
import { useSelector } from 'react-redux';
import { Group, BoxRadio } from './Filters.Styled';

const FilterUso = ({ items, onChange, valueSelect }) => {
  const hasOptionUso = useSelector(state => state.Getting.optionUso);
  return (
    <>
      {hasOptionUso && (
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
      )}
    </>
  );
};

export default FilterUso;
