import React from 'react';
import { useSelector } from 'react-redux';
import { GroupCard, BoxCard } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

const ManosFilter = ({ items, onChange, className }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionManos);
  return (
    <>
      {hasOptionActive && (
        <GroupCard className={className}>
          <BoxCard>
            {items.map(mano => (
              <CardCheck key={mano.id} {...mano} onChange={onChange} />
            ))}
          </BoxCard>
        </GroupCard>
      )}
    </>
  );
};
export default ManosFilter;
