import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index.jsx';
import TasksContainerComponent from './components/TasksContainerComponent.jsx';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <TasksContainerComponent />
  </Provider>,
  document.getElementById('main')
);