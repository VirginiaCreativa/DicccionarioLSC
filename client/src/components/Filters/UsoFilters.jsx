/* eslint-disable import/no-dynamic-require */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  GroupUso,
  BoxUso,
  IconUso,
  IconCheck,
  InputUso,
  SpanUso,
} from './Filters.Styled';

import { checkActivUso } from '../../redux/actions/GettingAction';

const FilterUso = ({ items, onChange }) => {
  const dispatch = useDispatch();
  const inputCheck = useRef(null);
  const hasOptionUso = useSelector(state => state.Getting.optionUso);
  const checkbox = useSelector(state => state.Getting.checkbox);

  console.log(inputCheck.current);
  const handleChekbox = () => {
    console.log(inputCheck.current.checked);
    if (inputCheck.current.checked === true) dispatch(checkActivUso());
  };

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
                activeCheck={checkbox}
                ref={inputCheck}
                onClick={handleChekbox}
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
