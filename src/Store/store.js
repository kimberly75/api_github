
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createBrowserHistory } from 'history'
import reducers from './Reducers/index'
import sagas from './Sagas'

const middlewares = []
const history = createBrowserHistory()

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}))
}

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const routerMiddleware = createRouterMiddleware(history)
middlewares.push(routerMiddleware)

const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
store.persist = () => persistStore(store)
store.runSaga(sagas)

export default store
