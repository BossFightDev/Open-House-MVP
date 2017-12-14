import { combineReducers } from 'redux';
import fieldsReducer from './fields';
import leadsReducer from './leads';
import propertyReducer from './property';
import userReducer from './user';
import questionsReducer from './questions'


export default rootReducer = combineReducers({
  fields: fieldsReducer,
  questions: questionsReducer,
  property: propertyReducer,
  user: userReducer,
  leads: leadsReducer,
})
