import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  comments: commentsReducer//(state = []) => state
});

export default rootReducer;
