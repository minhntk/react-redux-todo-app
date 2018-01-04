import React, {Component} from 'react';
import UserProfileView from './UserProfileView.jsx';

class UserProfileContainer extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <UserProfileView />
    );
  }
}

export default UserProfileContainer;