// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';


// internal modules
import App from './components/app';
import '../assets/stylesheets/prism.css';
import '../assets/stylesheets/old-style.css';
import '../assets/stylesheets/application.scss';

const identityReducer = (state = null) => state;

const initialState = {
  sections: ['html']
};

// State and reducers
const reducers = combineReducers({
  sections: identityReducer
});

// Middlewares
const middlewares = applyMiddleware(logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:section" component={App} />
        <Redirect from="/" to="/html" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
