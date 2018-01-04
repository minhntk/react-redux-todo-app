import React, {Component} from 'react';
import TaskDetailView from './TaskDetailView.jsx';

class TaskDetailContainer extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <TaskDetailView title={this.props.task.title}
                      description={this.props.task.description}
                      status={this.props.task.status}
      />
    );
  }
}

export default TaskDetailContainer;