import { ADD_HASHTAGS, ADD_QUESTIONS } from "../actions/index";

ADD_HASHTAGS

const init = {
  phoneQ: true,
  agentQ: true, 
  sourceQ: false,
  suggestQ: false,
  imageQ: true,
  image: '../../Assets/houseTest.jpg',
  priceQ: true,
  bedBathQ: true,
  sqftQ: false, 
  hashtagQ: false, 
  hashtags: [],
}


export default (state = init, action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS':
      return Object.assign({}, state, action.payload);
    case 'ADD_HASHTAGS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}