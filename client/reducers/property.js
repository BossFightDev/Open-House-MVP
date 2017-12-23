import PROPERTY_FOUND from "../actions";
import OPENHOUSE_ADDED from "../actions";

const init = {
  address: "1600 Pennsylvania Ave NW",
  beds: 3,
  MLS: 1234,
  baths: 1.5,
  sqft: 25000,
  images: [
    "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15"
  ],
  price: 23000000000,
  openHouse: { id: 0 }
};

export default (state = init, action) => {
  switch (action.type) {
    case "PROPERTY_FOUND":
      return Object.assign({}, state, action.payload);
      break;
    case "OPENHOUSE_ADDED":
      return Object.assign({}, state.openHouses, action.payload);
    default:
      return state;
  }
};
