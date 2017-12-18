import FIND_LEADS from '../actions';

const init = {
  name: 'Jantonivan Coolendez',
  email: 'thebestcoder@LambdaU.com',
  phone: 5555559292,
  agent: 'Austin Allred',
  source: 'Lambda'
}


export default (state = init, action) => {
  switch (action.type) {
    case 'FIND_LEADS':
      return Object.assign(state, action.payload)
    default:
      return state;
  }
}