import React from 'react';
import { CardWarpper, Check, StyleCard, IconCheck } from './CardCheck.Styled';

const CardCheck = ({
  value,
  artibuto,
  icon,
  onChange,
  Ref,
  onClick,
  ActiveCheck,
  className,
}) => (
  <CardWarpper>
    <Check
      type="checkbox"
      value={value}
      aria-label={value}
      name={artibuto}
      onClick={onClick}
      onChange={onChange}
      className={ActiveCheck && 'Show'}
      ref={Ref}
    />
    <img src={icon} alt={value} />
    <StyleCard className={className}>
      <IconCheck className="bx bx-check" />
    </StyleCard>
  </CardWarpper>
);
export default CardCheck;
