import LEADS_FOUND from '../actions'

const init = {
  name: 'Jantonivan Coolendez',
  email: 'thebestcoder@LambdaU.com',
  phone: 5555559292,
  agent: 'Austin Allred',
  source: 'Lambda'
}


export default (state = init, action) => {
  switch (action.type) {
    case 'LEADS_FOUND':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}