export const TASK_GET_ALL = 'TASK_GET_ALL';

export function getAllTasks(tasks) {
    return {
        type: TASK_GET_ALL,
        tasks: tasks
    }
}

export const addTask = task => {
    return {
        type: ADD_TASK,
        task
    }
}