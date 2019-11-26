import React from 'react';
import { useSelector } from 'react-redux';
import { Group, BoxCard } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

const ManosFilter = ({ items, onChange, className, Ref }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionManos);

  return (
    <>
      {hasOptionActive && (
        <Group className={className}>
          <BoxCard>
            {items.map((mano, index) => (
              <CardCheck key={index} {...mano} onChange={onChange} Ref={Ref} />
            ))}
          </BoxCard>
        </Group>
      )}
    </>
  );
};
export default ManosFilter;
