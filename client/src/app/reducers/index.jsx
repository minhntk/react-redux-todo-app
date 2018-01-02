
import { combineReducers } from 'redux';
import taskReducers from './taskReducers.jsx';
import userReducers from './userReducers.jsx';

const todoApp = combineReducers({
  tasks: taskReducers,
  user: userReducers
});

export default todoApp;