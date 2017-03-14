import { types } from '../Actions/Buddy'

export default function(state = {}, action) {
  switch(action.type) {
  case types.SET_NAME:
    return {
      ...state,
      name: action.name
    }

  default:
    return state
  }
}