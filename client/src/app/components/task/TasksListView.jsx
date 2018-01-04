import React, {Component} from 'react';
import TaskDetailContainer from './TaskDetailContainer.jsx';
import _ from 'lodash';

class TasksListView extends React.Component {

  render() {
    if (!this.props.tasks || this.props.tasks.length < 1) {
      return (<div></div>);
    }
    let tasksData = _.values(this.props.tasks), listItems = [], ref = this;
    tasksData.forEach(item => {
      if (item.status === ref.props.type) {
        listItems.push(<TaskDetailContainer key={item._id} task={item}/>)
      }
    });
    return (
      <div className="task-list-detail-container">
        <div>{this.props.type}</div>
        {listItems}
      </div>
    );
  }
}

export default TasksListView;