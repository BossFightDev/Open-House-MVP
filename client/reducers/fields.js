import AUTHENTICATE_USER from '../actions';
const questions = require('../Assets/fields')


export default (state = { questions }, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return Object.Assign(state, {authenticate: true});
    default:
      return state;
  }
}
