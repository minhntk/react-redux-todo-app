import React, {Component} from 'react';
import TaskFormView from './TaskFormView.jsx';
import { connect } from 'react-redux';
import {addTask} from '../../actions/index.jsx';

class TaskFormContainer extends  React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <TaskFormView {...this.props} />
        );
    }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: task => {
        dispatch(addTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);