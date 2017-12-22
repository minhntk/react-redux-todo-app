

const taskReducers = (state, action) => {

  switch (action.type) {
    case 'ADD_TASK':
        return Object.assign({}, state, {
            tasks: [
            ...state.tasks,
            action.task
          ]
        })
    default:
      return state
  }
}

export default taskReducers;