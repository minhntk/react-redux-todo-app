import React from 'react';
import ReactDOM from 'react-dom';
import TasksContainerComponent from './components/TasksContainerComponent.jsx';
//import { AppContainer } from 'react-hot-loader';


ReactDOM.render(<TasksContainerComponent />, document.getElementById('main'));

/*const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('main')
    );
};

render(TasksContainerComponent);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/TasksContainerComponent.jsx', () => {
        render(TasksContainerComponent)
    });
}*/