
import { combineReducers } from 'redux';
import taskReducers from './taskReducers.jsx';

const todoApp = combineReducers({
  task: taskReducers
});

export default todoApp;