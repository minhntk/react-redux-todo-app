import React, {Component} from 'react';
import TaskFormView from './TaskFormView.jsx';
import { connect } from 'react-redux';
import {addTask} from '../../actions/taskActions.jsx';
import axios from 'axios';

class TaskFormContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TaskFormView {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: task => {
      axios.post('/api/task/addTask', task)
        .then(response => {
          dispatch(addTask(task));
        });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);