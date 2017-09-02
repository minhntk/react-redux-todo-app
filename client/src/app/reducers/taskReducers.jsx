import Tasks from '../data/Task.js';


const initialState = {
  taskList: Tasks
}

const taskReducers = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TASK':
        action.task.id = state.taskList.length;
        return Object.assign({}, state, {
          taskList: [
            ...state.taskList,
            action.task
          ]
        })
    default:
      return state
  }
}

export default taskReducers;