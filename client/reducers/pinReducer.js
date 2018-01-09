import CREATE_PIN, CONFIRM_PIN from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_PIN:
      return Object.assign({}, state, action.payload)
    case CONFIRM_PIN:
      if (state.pin === action.payload) return true
      return false
    default:
      return state
  }
}