import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import routes from 'routes'
import App from './App'
import Footer from './node_modules/components/Footer/Footer'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>,
      {routes},
    </ConnectedRouter>
    <Footer />
  </Provider>,
  document.getElementById('root')
);
