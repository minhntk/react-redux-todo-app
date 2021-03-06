'use strict';
const UserRepository = require('../models/UserRepository.js');

module.exports = class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }

    login() {
        return ((req, res, next) => {
            res.send({isAuthenticated: true, payload: {}});
        });
    }

    findAll(){
        return ((req, res, next) => {
            this.userRepository.findAll().then(result=> {
                res.send(JSON.parse(result));
            });
        });
    }

    save(){
        return ((req, res, next) => {
            this.userRepository.save()
            res.send({});
        });
    }

}