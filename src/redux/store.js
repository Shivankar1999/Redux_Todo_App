import { legacy_createStore } from 'redux';
import { rootReducers } from './rootReducers';

export const store = legacy_createStore(rootReducers);
