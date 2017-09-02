"use strict";


const UserService = require('../services/UserService');

module.exports = class LoginRoutes {

    constructor(){
        var express = require('express');
        const router = express.Router();
        const userService = new UserService();

        router.get('/api/', userService.login());
        router.get('/api/user/findAll', userService.findAll());
        router.get('/api/user/save', userService.save());
        this.$router = router;
    }

    get router(){
        return this.$router;
    }
}

