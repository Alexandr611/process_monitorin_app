import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';

let store = null;

const middlewares = [
  thunk
];

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const initStore = (initialState) => {
  store = createStore(
    rootReducer,
    enhancer
  );

  return store;
};

export {store, initStore };