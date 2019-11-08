import React from 'react';
import { CardWarpper, Check, SpanCard, IconCheck } from './CardCheck.Styled';

const CardCheck = ({ value, artibuto, icon, onChange }) => (
  <CardWarpper>
    <Check
      type="checkbox"
      value={value}
      aria-label={value}
      name={artibuto}
      onChange={onChange}
    />
    <img src={icon} alt={value} />
    <SpanCard>
      <IconCheck className="bx bx-check" />
    </SpanCard>
  </CardWarpper>
);
export default CardCheck;
