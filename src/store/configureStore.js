import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

function configureStore(initialState) {
  var middlewares = [thunk, logger];

  // using 'compose' to apply middleware when running 'createStore'
  return compose(
    applyMiddleware(...middlewares)
  )(createStore)(rootReducer, initialState);
}

export default configureStore;
