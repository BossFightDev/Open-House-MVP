import AUTHENTICATE_USER from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return Object.Assign(state, {action.authenticate});
    default:
      return state;
  }
}
