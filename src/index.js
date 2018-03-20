import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import Cable from 'actioncable'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store)
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
