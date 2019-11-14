import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GroupFilter, Selections, Title } from './Filters.Styled';

import Button from './UI/Button';

const Filter = () => (
  <>
    <Button>Forma de la mano</Button>
    <Button>Ubicación del cuerpo</Button>
    <Button>Temas</Button>
    <Button>Uso</Button>
  </>
);
export default Filter;
