import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import rootReducer from './rootReducer';
import {reducers} from '.';

export default function configureStore(history, initialState) {
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  const root = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  return createStore(
    // root(history),
    root,
    { ...initialState },
    compose(applyMiddleware(...middleware), ...enhancers),
  );
}
