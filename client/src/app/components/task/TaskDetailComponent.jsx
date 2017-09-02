import React, {Component} from 'react';
import TaskDetailComponentView from './TaskDetailComponentView.jsx';

class TaskDetailComponent extends  React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <TaskDetailComponentView name={this.props.task.name}
                                     description={this.props.task.description}
                                     status={this.props.task.status}
            />
        );
    }
}

export default TaskDetailComponent;