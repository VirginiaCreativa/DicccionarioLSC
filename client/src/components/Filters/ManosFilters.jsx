import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Group, BoxCard } from './Filters.Styled';

import { checkActivManos } from '../../redux/actions/GettingAction';
import CardCheck from '../../common/CardCheck/CardCheck';

const ManosFilter = ({ items, onChange, className }) => {
  const dispathc = useDispatch();
  let manosRef = useRef();
  const groupCheckRef = useRef();
  const { current } = [manosRef, groupCheckRef];
  const hasOptionActive = useSelector(state => state.Getting.optionManos);
  const activeCheckStyled = useSelector(state => state.Getting.checkManos);
  const takeTagMano = useSelector(state => state.Search.takeTagMano);
  const tagManos = useSelector(state => state.Search.tagManos);

  const handleActiveCheck = (ev, mano, index) => {
    if (manosRef.checked === false) dispathc(checkActivManos());
  };

  const inputsCheck = document.querySelectorAll('input[type=checkbox]');

  if (inputsCheck.length >= 1) {
    const este = document.querySelector(`[aria-label="${takeTagMano}"]`);
    if (takeTagMano.length >= 2) {
      este.classList.remove('Show');
    }
  }

  return (
    <>
      {hasOptionActive && (
        <Group className={className}>
          <BoxCard>
            {items.map((mano, index) => (
              <CardCheck
                key={index}
                {...mano}
                onChange={onChange}
                Ref={ref => {
                  manosRef = ref;
                }}
                ActiveCheck={activeCheckStyled}
                onClick={() => handleActiveCheck(mano, index)}
              />
            ))}
          </BoxCard>
        </Group>
      )}
    </>
  );
};
export default ManosFilter;
