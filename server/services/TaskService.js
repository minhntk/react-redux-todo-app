'use strict';
const TaskRepository = require('../models/TaskRepository.js');

module.exports = class TaskService {

    constructor(){
        this.taskRepository = new TaskRepository();
    }

    login() {
        return ((req, res, next) => {
            console.log(req);
            res.send({isAuthenticated: true, payload: {}});
        });
    }

    findAll(){
        return ((req, res, next) => {
            this.taskRepository.findAll().then(result=> {
                res.send(JSON.parse(result));
            });
        });
    }

    saveTask(){
        return ((req, res) => {
            console.log(req);
            this.taskRepository
                .saveTask(req.body)
                .then(result => {
                   res.send(result);
                })
                .catch(err => {
                   res.send('error');
                });
        });
    }

}