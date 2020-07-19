import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducers } from '.';

export default (history) => combineReducers({
  ...reducers,
  router: connectRouter(history),
});
