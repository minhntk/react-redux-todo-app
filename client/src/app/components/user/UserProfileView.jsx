import React, {Component} from 'react';
import { connect } from 'react-redux'

const UserProfileView = (props) => {
    console.log(props);
    return (
        <div className="user-profile-container">
            <div className="user-profile-row">
                {props.username}
            </div>
        </div>
    );
}

export default UserProfileView;