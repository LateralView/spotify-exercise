import './index.scss' 
import React from 'react'
import store from './store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import Hello from './Components/Hello'
const __store = store()

ReactDOM.render((
  <Provider store={__store}>
    <Router history={syncHistoryWithStore(browserHistory, __store)}>
      <Route path='/' component={Hello} />
    </Router>
  </Provider>),
  document.body.appendChild(document.createElement('div'))
)