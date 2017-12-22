"use strict";


const TaskService = require('../services/TaskService');

module.exports = class TaskRoutes {

    constructor(){
        var express = require('express');
        const router = express.Router();
        const taskService = new TaskService();

        router.get('/api/dashboard/findAll', taskService.findAll());
        router.post('/api/task/addTask', taskService.saveTask());
        this.$router = router;
    }

    get router(){
        return this.$router;
    }
}