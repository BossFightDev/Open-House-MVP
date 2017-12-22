import { combineReducers } from 'redux';
import stateReducer from './appState';
import leadsReducer from './leads';
import propertyReducer from './property';
import userReducer from './user';
import questionsReducer from './questions'


export default rootReducer = combineReducers({
  appState: stateReducer,
  questions: questionsReducer,
  property: propertyReducer,
  user: userReducer,
  leads: leadsReducer,
})
