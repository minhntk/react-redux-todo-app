import React, {Component} from 'react';
import { connect } from 'react-redux'
import TasksListView from './TasksListView.jsx';
import { fetchTaskData } from '../../actions/taskActions.jsx';
import axios from 'axios';


class TasksListContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTaskData();
  }

  render() {
    return (
      <TasksListView {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {fetchTaskData})(TasksListContainer);