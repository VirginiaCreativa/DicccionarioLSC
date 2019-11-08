import React from 'react';
import { CardWarpper, Check, SpanCard, IconCheck } from './CardCheck.Styled';

const CardCheck = ({ value, icon, onChange }) => (
  <CardWarpper>
    <Check
      type="checkbox"
      value={value}
      arial-label="checked"
      onChange={onChange}
    />
    <img src={icon} alt={value} />
    <SpanCard>
      <IconCheck className="bx bx-check" />
    </SpanCard>
  </CardWarpper>
);
export default CardCheck;
