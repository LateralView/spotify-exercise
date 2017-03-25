import Saga from './Sagas'
import Reducers from './Reducers'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const composeEnhanced = process.env.NODE_ENV === 'development' && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose

export default () => {
  const store = createStore(
    Reducers,
    composeEnhanced(
      applyMiddleware(sagaMiddleware)
    )
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./Reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(Saga)
  return store
}
