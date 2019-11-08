import React from 'react';
import { CardWarpper, Check, SpanCard, IconCheck } from './CardCheck.Styled';

const CardCheck = ({ value, img, checked }) => (
  <CardWarpper>
    <Check
      type="checkbox"
      value={value}
      arial-label="checked"
      checked={checked}
      aria-checked={checked}
    />

    <img src={img} alt={value} />
    <SpanCard>
      <IconCheck className="bx bx-check" />
    </SpanCard>
  </CardWarpper>
);
export default CardCheck;
