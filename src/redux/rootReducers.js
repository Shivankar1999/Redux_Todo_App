import { combineReducers } from 'redux';
import { operationReducers } from '../redux/TodoApp/reducers/operations';

export const rootReducers = combineReducers({
  operationReducers,
  // Can be added multipe reducers if nedded
});
