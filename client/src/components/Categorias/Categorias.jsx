import React from 'react';

import Item from './CategoriaItem';

const Categorias = () => {
  const items = [
    { id: 1, tema: 'Temas' },
    { id: 2, tema: 'Alfabetos' },
    { id: 3, tema: 'Numeros' },
    { id: 4, tema: 'Cordiales' },
    { id: 5, tema: 'Notas para orientar' },
  ];
  return (
    <>
      {items.map(item => (
        <div key={item.id}>
          <Item tema={item.tema} />
        </div>
      ))}
    </>
  );
};

export default Categorias;
