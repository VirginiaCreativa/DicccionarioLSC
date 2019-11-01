import axios from 'axios';

import {} from '../types';

export const fetchAuthSuccess = user => ({});

export const fetchAuthBegin = () => async dispatch => {
  try {
    const request = await axios.get('/api/currentuser').then(res => {
      dispatch();
    });
    return request;
  } catch (err) {
    console.log(err);
    dispatch();
  }
};
