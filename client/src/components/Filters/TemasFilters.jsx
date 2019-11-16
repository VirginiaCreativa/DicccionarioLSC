import React from 'react';
import { useSelector } from 'react-redux';
import { Group, Select, Option, Icon, Ul } from './Filters.Styled';

const TemasFilter = ({ items, onChange, valueSelect }) => {
  const hasOptionActive = useSelector(state => state.Getting.optionTemas);
  const myData = [].concat(items).sort((a, b) => a.itemM > b.itemM);

  return (
    <>
      {hasOptionActive && (
        <Group>
          <Ul className="list-unstyled">
            {myData.map(item => (
              <li key={item.id}>
                <input type="checkbox" />
                <label className="container">
                  {item.tema.charAt(0).toUpperCase() + item.tema.slice(1)}
                </label>
                <span className="checkmark" />
              </li>
            ))}
          </Ul>
        </Group>
      )}
    </>
  );
};

export default TemasFilter;
