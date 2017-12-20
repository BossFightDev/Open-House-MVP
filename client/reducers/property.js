import PROPERTY_FOUND from '../actions';
import OPENHOUSE_ADDED from '../actions';

const init = {
  address: '1600 Pennsylvania Ave NW',
  beds: 3,
  baths: 1.5,
  sqft: 25000,
  images: [],
  price: 23000000000,
  openHouse: {id: 0}
}


export default (state = init, action) => {
  switch (action.type) {
    case 'PROPERTY_FOUND': 
      return Object.assign(state, action.payload)
      break;
    case 'OPENHOUSE_ADDED':
      return Object.assign(state.openHouse, action.payload)
    default:
      return state
  }
}