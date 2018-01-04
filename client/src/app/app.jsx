import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import todoApp from './reducers/index.jsx';
import { Router, Route, browserHistory } from 'react-router';
import TasksContainerComponent from './components/TasksContainerComponent.jsx';
import routes from './routes/routes.jsx';
import thunkMiddleware from 'redux-thunk'

let store = createStore(
  todoApp,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('main')
);