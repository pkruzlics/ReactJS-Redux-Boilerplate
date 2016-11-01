import { combineReducers } from 'redux';
import settings from './settings.reducers';

// TAKES THE STORE AND SETS KEYS AS THESE REDUCERS
/* e.g.
  store = {
    settings: {},
    OTHER_NAMES: {},
  }
*/
const rootReducer = combineReducers({
  settings,
  // OTHER_NAMES
});

export default rootReducer;
