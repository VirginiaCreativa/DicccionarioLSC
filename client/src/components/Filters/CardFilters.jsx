import React from 'react';
import { GroupCard, BoxCard } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

const FilterCard = ({ items, onChange, className }) => (
  <GroupCard className={className}>
    <BoxCard>
      {items.map(mano => (
        <CardCheck key={mano.id} {...mano} onChange={onChange} />
      ))}
    </BoxCard>
  </GroupCard>
);

export default FilterCard;
