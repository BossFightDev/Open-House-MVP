import { ADD_HASHTAGS, ADD_QUESTIONS } from "../actions/index";

ADD_HASHTAGS

const init = {
  phoneQ: true,
  agentQ: true, 
  sourceQ: false, 
  imageQ: true,
  image: [],
  priceQ: true,
  bedbathQ: true,
  sqftq: false, 
  hashtagQ: false, 
  hashtags: [],
}


export default (state = init, action) => {
  switch (action.type) {
    case 'ADD_HASHTAGS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}