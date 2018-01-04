import React, {Component} from 'react';
import TasksListContainer from './task/TasksListContainer.jsx';
import TaskFormContainer from './task/TaskFormContainer.jsx';
import '../style/sass/todo-list.scss';
import UserProfileContainer from './user/UserProfileContainer.jsx';
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';

class TasksContainerComponent extends React.Component {

  render() {
    const types = ["TODO", "IN_PROGRESS", "QA", "RESOLVE"];
    let tasksList = types.map((type)=>
      <TasksListContainer key={type} type={type}/>
    );
    return (
      <div>
        <div className="header">
          <UserProfileContainer />
        </div>
        <div className="task-list-container">
          <div>
            <TaskFormContainer />
          </div>
          <div>
            {tasksList}
          </div>
        </div>
      </div>
    );
  }
}

export default TasksContainerComponent;
//export default DragDropContext(HTML5Backend)(TasksContainerComponent);