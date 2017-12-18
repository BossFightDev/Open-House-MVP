import PROPERTY_FOUND from '../actions'

const init = {
  address: '1600 Pennsylvania Ave NW',
  beds: 3,
  baths: 1.5,
  sqft: 25000,
  images: [],
  price: 23000000000,
}


export default (state = init, action) => {
  switch (action.type) {
    case 'PROPERTY_FOUND': 
      return Object.assign(state, action.payload)
    default:
      return state
  }
}