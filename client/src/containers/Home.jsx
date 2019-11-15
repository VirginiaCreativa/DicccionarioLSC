import React from 'react';
import { useSelector } from 'react-redux';

import Categorias from '../components/Categorias/Categorias';

const Home = () => {
  const isFilterActive = useSelector(state => state.Getting.activeFilter);
  return <>{isFilterActive && <Categorias />}</>;
};

export default Home;
