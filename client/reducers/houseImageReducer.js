export default (state = {}, action) => {
  switch(action.type) {
    case 'IMAGE_SELECTED': {
      console.log('IMAGE URI IMAGE URI')
      console.log(action.payload)
      return Object.assign({}, state, action.payload)
    }
    default: {
      return state;
    }
  }
}