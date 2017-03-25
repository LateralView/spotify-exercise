import * as actions from '../Actions/Search'

const searchReducer = (state = { albums: [] }, action) => {
  switch(action.type) {
  case actions.types.SEARCH_RESOLVED: return {
    albums: action.data
  }
  case actions.types.SEARCH_REQUESTED: return {
    ...state,
    query: action.query
  }
  default: return state
  }
}

export default searchReducer
