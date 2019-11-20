import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Getting from './GettingReducer';
import Search from './SearchReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Getting,
    Search,
  });
