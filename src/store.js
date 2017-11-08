import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = []

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(...enhancers))
)