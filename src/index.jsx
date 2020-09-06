// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import logger from 'redux-logger';

// internal modules
import App from './components/app';

// Style
import '../assets/stylesheets/prism.css';
import '../assets/stylesheets/old-style.css';
import '../assets/stylesheets/application.scss';

// Data
import sections from './data/sections';

// Reducers
import subsectionsReducer from './reducers/sub_sections_reducer';

const identityReducer = (state = null) => state;


const reducers = combineReducers({
  sections: identityReducer,
  subSections: subsectionsReducer
});


const initialState = {
  sections,
  subSections: {}
};


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
