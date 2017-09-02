import React, {Component} from 'react';
import { connect } from 'react-redux'
import TasksListView from './TasksListView.jsx';
import Tasks from '../../data/Task.js';

class TasksListContainer extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Task List Name',
            tasks: Tasks
        };
    }


    render(){
        return(
            <TasksListView {...this.props} />
        );
    }
}

const mapStateToProps = state => {
  console.log(state.task);
  return {
    tasks: state.task.taskList
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);