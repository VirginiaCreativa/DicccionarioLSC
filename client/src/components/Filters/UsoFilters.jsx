/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  GroupUso,
  BoxUso,
  IconUso,
  IconCheck,
  InputUso,
  SpanUso,
} from './Filters.Styled';

const FilterUso = ({ items, onChange, value }) => {
  const hasOptionUso = useSelector(state => state.Getting.optionUso);
  return (
    <>
      {hasOptionUso && (
        <GroupUso>
          {items.map(item => (
            <BoxUso key={item.id} aria-label={item.tema} {...item}>
              <InputUso
                type="checkbox"
                name={item.uso}
                onChange={onChange}
                value={item.uso}
                aria-label={item.uso}
              />
              <SpanUso>
                <IconCheck className="bx bx-check" />
              </SpanUso>
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
