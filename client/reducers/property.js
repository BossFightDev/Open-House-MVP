import PROPERTY_FOUND from '../actions';
import OPENHOUSE_ADDED from '../actions';

const init = {
  address: '1600 Pennsylvania Ave NW',
  beds: 3,
  baths: 1.5,
  sqft: 25000,
  images: [],
  price: 23000000000,
  openHouses: [
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 24, 2017",
      address: "245 Maple Ave, Waco",
      guests: 52
    },
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 01, 2017",
      address: "11 West Main St, Lubbock",
      guests: 41
    },
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 24, 2017",
      address: "245 Maple Ave, Waco",
      guests: 52
    },
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 01, 2017",
      address: "11 West Main St, Lubbock",
      guests: 41
    },
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 24, 2017",
      address: "245 Maple Ave, Waco",
      guests: 52
    },
    {
      image:
        "https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15",
      date: "Oct 01, 2017",
      address: "11 West Main St, Lubbock",
      guests: 41
    }
  ]
}


export default (state = init, action) => {
  switch (action.type) {
    case 'PROPERTY_FOUND': 
      return Object.assign(state, action.payload)
      break;
    case 'OPENHOUSE_ADDED':
      return Object.assign(state.openHouses, action.payload)
    default:
      return state
  }
}