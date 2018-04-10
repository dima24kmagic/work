import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import userReducer from './reducers/app.js'

import App from './components/App';

// Add the reducer to your store on the `routing` key

/*Main state
{
  users: [
  {
  name: 'aefe',
  gender: true,
  age: 18,
  education: 111,
  havekids: false
  }
  ]
}
*/
const store = createStore(
  combineReducers({
    userReducer,
    routing: routerReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} store={store}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// store.dispatch()

store.subscribe(() => {
  return(
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} store={store}/>
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  )
})
