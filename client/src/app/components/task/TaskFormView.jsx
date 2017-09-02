import React, {Component} from 'react';
import { connect } from 'react-redux'

const TaskFormView = (props) => {
    let title, description;
    const onSubmit = event => {
        event.preventDefault();
        let task = {
            title: title.value,
            description: description.value,
            status: "TODO"
        };
        props.onAddTask(task);
        console.log(event);
    }

    return (
        <div className="task-form-container">
            <form onSubmit={onSubmit} >
                <div className="task-form-row">
                    <span className="label">Title:</span> 
                    <span><input ref={ el => title = el } type="text" name="task-title" /></span>
                </div>
                <div className="task-form-row">
                    <span className="label">Description:</span> 
                    <span>
                        <textarea ref={ el => description = el } type="text" 
                                  name="task-description">
                        </textarea>
                    </span>
                </div>
                <div className="task-form-row">
                    <input type="submit" className="task-form-submit-btn" value="Add Task" />
                </div>
            </form>
        </div>
        
    );
}

export default TaskFormView;