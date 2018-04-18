import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import {HashRouter, Route} from 'react-router-dom';

import {users, images, isLoading, imagesToShow} from './reducers/app.js'

//Components
import App from './components/App';
import Gallery from './components/Gallery'

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
  ],
  image: [
  {
    url: 'qwfqwf',
    title: 'qwfqwf'
  }
  ],
  isLoaded: true
}
*/


// CREATING STORE AND PASSING REDUCERS
//+ PASSING window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// TO USE OUR REDUX TOOLS

const store = createStore(
  combineReducers({
    users,
    images,
    isLoading,
    imagesToShow
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" render={()=><App store={store}/>}/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

//RE RENDER OUR APPLICATION ON EVERY DISPATCH
store.subscribe(() => {
  console.log(store.getState());
  return(
    ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          <Route path="/" render={()=><App store={store}/>}/>
        </HashRouter>
      </Provider>,
      document.getElementById('root')
    )
  )
})
