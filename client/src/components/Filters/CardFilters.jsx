import React from 'react';
import { GroupCard, BoxCard } from './Filters.Styled';

import CardCheck from '../../common/CardCheck/CardCheck';

const FilterCard = ({ items, onChange }) => (
  <GroupCard>
    <BoxCard>
      {items.map(mano => (
        <CardCheck key={mano.id} {...mano} onChange={onChange} />
      ))}
    </BoxCard>
  </GroupCard>
);

export default FilterCard;
