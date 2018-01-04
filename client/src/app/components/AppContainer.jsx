import React, {Component} from 'react';
import '../style/sass/todo-list.scss';
import UserLoginContainer from './user/UserLoginContainer.jsx';
import { Link } from 'react-router';
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';

class AppContainer extends Component {

  render() {
    return (
      <div>
        <div className="navigation-menu">
                    <span className="header-navigator">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="header-navigator">
                        <Link to="/dashboard">Dashboard</Link>
                    </span>
                    <span className="header-navigator">
                        <Link to="/blog">Blog</Link>
                    </span>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppContainer;  