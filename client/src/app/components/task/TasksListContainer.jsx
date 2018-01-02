import React, {Component} from 'react';
import { connect } from 'react-redux'
import TasksListView from './TasksListView.jsx';
import { getAllTasks } from '../../actions/taskActions.jsx';
import axios from 'axios';

class TasksListContainer extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        let ref = this;
        axios.get('/api/dashboard/findAll')
            .then(response => {
                ref.setState({
                    tasks: response.data
                });
                console.log('did mount');
            });
    }


    render(){
        return(
            <TasksListView {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state.tasks);
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);