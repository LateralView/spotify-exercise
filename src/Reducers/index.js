import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Buddy from './Buddy'

export default combineReducers({
  Buddy,
  routing: routerReducer
})