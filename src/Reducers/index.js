import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Search from './Search'

export default combineReducers({
  Search,
  routing: routerReducer
})
