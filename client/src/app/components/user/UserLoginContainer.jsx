import React, {Component} from 'react';
import UserLoginView from './UserLoginView.jsx';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/userActions.jsx';
import { browserHistory } from 'react-router';
import axios from 'axios';

class UserLoginContainer extends  React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <UserLoginView {...this.props}  />
        );
    }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: creds => {
        axios.post('/api/login', creds)
             .then(response => {
                console.log(response.data);
                dispatch(requestLogin(creds));
                browserHistory.push('/dashboard');
             });
        
        //window.location.href = 'http://localhost:8888' + '/dashboard';
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);