import { combineReducers } from 'redux';
import search from './search_reducer';

const rootReducer = combineReducers({
  searchResult:search,
});

export default rootReducer;
