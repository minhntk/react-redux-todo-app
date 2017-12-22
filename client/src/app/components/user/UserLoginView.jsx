import React, {Component} from 'react';


const UserLoginView = (props) => {
    console.log(props);

    let username, password;
    const onSubmit = event => {
        event.preventDefault();
        let creds = {
            username: username.value,
            password: password.value
        };
        props.onUserLogin(creds);
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-row">
                <span className="label">UserName:</span> 
                <span><input ref={ el => username = el } type="text" /></span>
            </div>
            <div className="form-row">
                <span className="label">Password:</span> 
                <span>
                   <span><input ref={ el => password = el } type="text" /></span>
                </span>
            </div>
            <div className="form-row">
                <input type="submit" className="form-submit-btn" value="Sign In" />
            </div>
        </form>
    );
}

export default UserLoginView;