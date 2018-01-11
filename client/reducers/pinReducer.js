import { CREATE_PIN, CONFIRM_PIN } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_PIN:
      console.log('creating pin')
      return Object.assign({}, state, action.payload)
   
    case CONFIRM_PIN:
    console.log('SAVED PIN')
    console.log(state.pin)
      if (state.pin === action.payload) return Object.assign({}, state, {confirmPin: true})
      return Object.assign({}, state, {confirmPin: false})
  
    default:
      return state
  }
}
