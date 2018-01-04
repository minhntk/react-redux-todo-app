import React, {Component} from 'react';
import TasksListContainer from './task/TasksListContainer.jsx';
import TaskFormContainer from './task/TaskFormContainer.jsx';
import '../style/sass/todo-list.scss';
import UserLoginContainer from './user/UserLoginContainer.jsx';
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';

class HomePageContainer extends React.Component {

  render() {
    const types = ["TODO", "IN_PROGRESS", "QA", "RESOLVE"];
    let tasksList = types.map((type)=>
      <TasksListContainer key={type} type={type}/>
    );
    return (
      <div className="home-page-section">
        <UserLoginContainer />
      </div>
    );
  }
}

export default HomePageContainer;