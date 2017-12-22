import React from 'react';  
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import HomePageContainer from '../components/HomePageContainer.jsx';
import TasksContainerComponent from '../components/TasksContainerComponent.jsx';
import UserLoginContainer from '../components/user/UserLoginContainer.jsx';
import NotFoundPageContainer from '../components/NotFoundPageContainer.jsx';
import AppContainer from '../components/AppContainer.jsx';




export default (  
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomePageContainer} />
      <Route path="/login" component={UserLoginContainer} />
      <Route path="/dashboard" component={TasksContainerComponent} />
      <Route path="/*" component={NotFoundPageContainer} />
  </Route>
);