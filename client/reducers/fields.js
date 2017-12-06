import AUTHENTICATE_USER from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return Object.Assign(state, { authenticate: true });
    case 'FORM_LAUNCHED':
      return Object.assign(state, { launched: true });
    default:
      return state;
  }
}
