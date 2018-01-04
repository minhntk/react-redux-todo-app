const INITIAL_STATE = {tasks: []};

const taskReducers = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          action.task
        ]
      });
    case 'GET_ALL_TASKS':
      let mergedState = Object.assign({}, state, {
        tasks: action.payload
      });
      return action.payload;
    default:
      return state;
  }
}

export default taskReducers;