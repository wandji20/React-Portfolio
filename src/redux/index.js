import { combineReducers } from 'redux';
import contactReducer from './contact/contact';

const rootReducer = combineReducers({ contactReducer });

export default rootReducer;
