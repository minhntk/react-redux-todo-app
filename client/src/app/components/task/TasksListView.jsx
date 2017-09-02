import React, {Component} from 'react';
import TaskDetailContainer from './TaskDetailContainer.jsx';

class TasksListView extends  React.Component {

    render(){
        if(!this.props.tasks) {
            return(<div></div>);
        }
        let listItems = [];
        for(let i = 0; i < this.props.tasks.length; i++) {
            let task = this.props.tasks[i];
            if(task.status === this.props.type) {
                listItems.push(<TaskDetailContainer key={task.id} task={task} />)
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

export default TasksListView;