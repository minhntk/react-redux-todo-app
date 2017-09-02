import React, {Component} from 'react';
import TasksListComponent from './task/TasksListComponent.jsx';
import '../style/sass/todo-list.scss';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class TasksContainerComponent extends  React.Component {

    render(){
        const types = ["TODO", "IN_PROGRESS", "QA", "RESOLVE"];
        let tasksList = types.map((type)=>
            <TasksListComponent key={type} type={type}/>
        );
        return(
            <div className="task-list-container">
                {tasksList}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(TasksContainerComponent);