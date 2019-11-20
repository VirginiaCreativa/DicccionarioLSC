import React from 'react';
import { useSelector } from 'react-redux';
import { Group, UlTemas, InputTemas, Checkmark } from './Filters.Styled';

const TemasFilter = ({ onChange, items, value }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionTemas);
  const myData = [].concat(items).sort((a, b) => a.tema > b.tema);

  return (
    <>
      {hasOptionActive && (
        <Group>
          <UlTemas className="list-unstyled">
            {myData.map(item => (
              <li key={item.id}>
                <InputTemas
                  type="checkbox"
                  value={item.tema}
                  aria-label={value}
                  name={item.artibuto}
                  onChange={onChange}
                />
                <label>
                  {item.tema.charAt(0).toUpperCase() + item.tema.slice(1)}
                </label>
                <Checkmark>
                  <i className="bx bx-check" />
                </Checkmark>
              </li>
            ))}
          </UlTemas>
        </Group>
      )}
    </>
  );
};

export default TemasFilter;
