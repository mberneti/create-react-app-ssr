import { combineReducers } from 'redux';
import counterReducer from './reducer';

const rootReducer = () =>
  combineReducers({
    count: counterReducer
  });

export default rootReducer;