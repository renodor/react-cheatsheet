// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import logger from 'redux-logger';

// internal modules
import App from './components/app';

// Style
import '../assets/stylesheets/old-style.css';
import '../assets/stylesheets/application.scss';

// Data
import sections from './data/sections';

// Reducers
import subsectionsReducer from './reducers/sub_sections_reducer';
import navbarReducer from './reducers/navbar_reducer';

// eslint-disable-next-line arrow-body-style
const identityReducer = (state = null) => state;

const reducers = combineReducers({
  sections: identityReducer,
  subSections: subsectionsReducer,
  activeNavbarSection: navbarReducer
});

const initialState = {
  sections,
  subSections: {},
  activeNavbarSection: Object.keys(sections)[0]
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
