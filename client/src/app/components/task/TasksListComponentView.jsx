import React, {Component} from 'react';
import TaskDetailComponent from './TaskDetailComponent.jsx';

class TasksListComponentView extends  React.Component {

    render(){
        let listItems = [];
        for(let i = 0; i < this.props.tasks.length; i++) {
            let task = this.props.tasks[i];
            if(task.status === this.props.type) {
                listItems.push(<TaskDetailComponent key={task.id} task={task} />)
            }
        }
        return(
            <div className="task-list-detail-container">
                <div>{this.props.type} Task</div>
                <div className="task-detail-container">{listItems}</div>
            </div>
        );
    }
}

export default TasksListComponentView;