import axios from 'axios';

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';


export function fetchTaskData() {
  return dispatch => {
    axios.get('/api/dashboard/findAll')
      .then(response => {
        dispatch(
          {
            type: GET_ALL_TASKS,
            payload: response.data
          }
        );
      })
      .catch(err => {
        console.log(err)
      });
  }

}

export const addTask = task => {
  return {
    type: ADD_TASK,
    task
  }
}