import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Getting from './GettingReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Getting,
  });
