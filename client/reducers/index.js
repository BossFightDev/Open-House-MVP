import { combineReducers } from 'redux';
import stateReducer from './appState';
import leadsReducer from './leads';
import propertyReducer from './property';
import userReducer from './user';
import questionsReducer from './questions';
import openHouseReducer from './openHouse';
import pinReducer from './pinReducer'
import houseImageReducer from './houseImageReducer';


export default rootReducer = combineReducers({
  appState: stateReducer,
  questions: questionsReducer,
  property: propertyReducer,
  user: userReducer,
  leads: leadsReducer,
  openHouse: openHouseReducer,
  pin: pinReducer,
  houseImage: houseImageReducer
  
})
