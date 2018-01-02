import OPENHOUSE_ADDED from "../actions";



export default (state = {}, action) => {
  switch (action.type) {
    case "OPENHOUSE_ADDED":
      return Object.assign({}, state.openHouses, action.payload);
    default:
      return state;
  }
};
