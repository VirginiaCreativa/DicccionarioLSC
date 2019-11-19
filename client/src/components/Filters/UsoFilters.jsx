/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { useSelector } from 'react-redux';
import { GroupUso, BoxUso, IconUso } from './Filters.Styled';

const FilterUso = ({ items, onChange }) => {
  const hasOptionUso = useSelector(state => state.Getting.optionUso);
  return (
    <>
      {hasOptionUso && (
        <GroupUso>
          {items.map(item => (
            <BoxUso
              onChange={onChange}
              key={item.id}
              aria-label={item.tema}
              {...item}>
              <IconUso>
                <img
                  alt={`icon de ${item.uso}`}
                  src={require(`../../assets/Icons/${item.icon}`)}
                />
              </IconUso>
              <span>{item.uso}</span>
            </BoxUso>
          ))}
        </GroupUso>
      )}
    </>
  );
};

export default FilterUso;
