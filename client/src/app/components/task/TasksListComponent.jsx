import React, {Component} from 'react';
import TasksListComponentView from './TasksListComponentView.jsx';
import Tasks from '../../data/Task.js';

class TasksListComponent extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Task List Name',
            tasks: Tasks
        };
    }


    render(){
        return(
            <TasksListComponentView name={this.state.name}
                                    type={this.props.type}
                                    tasks={this.state.tasks}
            />
        );
    }
}

export default TasksListComponent;