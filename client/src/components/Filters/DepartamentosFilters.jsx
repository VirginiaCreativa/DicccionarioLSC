import React from 'react';
import { useSelector } from 'react-redux';
import {
  Group,
  UlDepartamentos,
  InputTemas,
  Checkmark,
} from './Filters.Styled';

const DepartamentosFilters = ({ onChange, items, value }) => {
  const hasOptionActive = useSelector(
    state => state.Getting.optionDepartamentos
  );
  const myData = []
    .concat(items)
    .sort((a, b) => a.departamento > b.departamento);

  return (
    <>
      {hasOptionActive && (
        <Group>
          <UlDepartamentos className="list-unstyled">
            {items.map(item => (
              <li key={item.id}>
                <InputTemas
                  type="checkbox"
                  value={item.departamento}
                  aria-label={value}
                  name={item.artibuto}
                  onChange={onChange}
                />
                <label>{item.departamento}</label>
                <Checkmark>
                  <i className="bx bx-check" />
                </Checkmark>
              </li>
            ))}
          </UlDepartamentos>
        </Group>
      )}
    </>
  );
};

export default DepartamentosFilters;
