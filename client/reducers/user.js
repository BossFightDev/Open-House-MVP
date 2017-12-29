import LOGGED_IN from '../actions'

const init = {
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: 5555559292,
  company: 'Boss Fight Dev',
  companyPicture: 'http://res.cloudinary.com/bossfight/image/upload/v1513200109/ybknnlqfa0pmwaztokcc.jpg',
  email: 'wzrdjim@gmail.com',
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
    case 'LOGGED_IN':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}