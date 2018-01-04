import Tasks from '../data/Task.js';

const initialState = {
  isAuthenticated: false,
  payload: {}
}


const userReducers = (state = {}, action) => {

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isAuthenticated: true,
        payload: {}
      })
    default:
      return state
  }
}

export default userReducers;