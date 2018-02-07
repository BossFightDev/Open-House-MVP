const init = {
  currentText: ''

}
export default (state = init, action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH_TEXT': {
      return {
        ...state,
        currentText: action.payload.searchText,
      }
    }
    default: {
      return state
    }
  }
} 