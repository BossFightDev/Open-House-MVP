import { AUTHENTICATE_USER,  TOGGLE_MODAL, PROPERTY_FOUND, IMAGE_MODAL_ON, IMAGE_MODAL_OFF } from '../actions';
const questions = require('../Assets/fields')
const init = {
  portrait: true,
  showModal: false,
  imageModal: false,
}

export default (state = init, action) => {
  switch (action.type) {
    case 'PROPERTY_FOUND': {
      return Object.assign({}, state, { showModal: true })
    }
    case 'TOGGLE_MODAL': {
      return Object.assign({}, state, { showModal: false })
    }
    case 'IMAGE_MODAL_ON': {
      return Object.assign({}, state, { imageModal: true })
    }
    case 'IMAGE_MODAL_OFF': {
      return Object.assign({}, state, { imageModal: false })
    }
    case 'USER_AUTHENTICATED':
      return Object.assign({}, state, { authenticate: true });
    case 'FORM_LAUNCHED':
      return Object.assign({}, state, { launched: true });
    default:
      return state;
  }
}
