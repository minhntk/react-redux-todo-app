import React, {Component} from 'react';

class TaskDetailView extends React.Component {

  render() {
    return (
      <div className="task-detail-container">
        <div className="task-title">{this.props.title}</div>
        <div className="task-description">
          <span>Description: </span>
          {this.props.description}
        </div>
        <div className="task-status">
          <span>Status: </span>
          <span>{this.props.status}</span>
        </div>
      </div>

    );
  }
}

export default TaskDetailView;