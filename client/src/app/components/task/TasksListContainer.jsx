import React, {Component} from 'react';
import { connect } from 'react-redux'
import TasksListView from './TasksListView.jsx';
import { getAllTasks } from '../../actions/taskActions.jsx';
import axios from 'axios';

class TasksListContainer extends  React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let ref = this;
        axios.get('/api/dashboard/findAll')
            .then(response => {
                console.log(response.data);
                ref.setState({
                    tasks: response.data
                });
            });
    }


    render(){
        return(
            <TasksListView {...this.props} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);