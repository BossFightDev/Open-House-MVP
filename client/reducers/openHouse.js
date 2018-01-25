import OPENHOUSE_ADDED from "../actions";
import LOAD_OPENHOUSE from "../actions";
import ADD_LEADS from "../actions";

export default (state = {openHouses: []}, action) => {
  switch (action.type) {
    case "ADD_LEADS":
      return Object.assign({}, state, action.payload);
    case 'LOAD_OPENHOUSE':
      return Object.assign({}, state, action.payload);
    case "OPENHOUSE_ADDED":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
