import { combineReducers, createStore } from 'redux';
import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
  count: counterReducer
});

export default function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState);
}