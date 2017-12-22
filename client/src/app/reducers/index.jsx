
import { combineReducers } from 'redux';
import taskReducers from './taskReducers.jsx';
import userReducers from './userReducers.jsx';

const todoApp = combineReducers({
  task: taskReducers,
  user: userReducers
});

export default todoApp;