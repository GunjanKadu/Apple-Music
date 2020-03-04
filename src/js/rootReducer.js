import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import viewReducer from './views/reducer';
import apiReducer from './api/reducer';
import audioReducer from './audio/reducer';
import navReducer from './components/bar/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  viewState: viewReducer,
  apiState: apiReducer,
  audioState: audioReducer,
  navState: navReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
