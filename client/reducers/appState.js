import { AUTHENTICATE_USER,  TOGGLE_MODAL, PROPERTY_FOUND } from '../actions';
const questions = require('../Assets/fields')
const init = {
  portrait: true,
  showModal: false
}

export default (state = init, action) => {
  switch (action.type) {
    case 'PROPERTY_FOUND': {
      return Object.assign({}, state, { showModal: true })
    }
    case 'TOGGLE_MODAL': {
      return Object.assign({}, state, { showModal: false })
    }
    case 'USER_AUTHENTICATED':
      return Object.assign({}, state, { authenticate: true });
    case 'FORM_LAUNCHED':
      return Object.assign({}, state, { launched: true });
    default:
      return state;
  }
}
