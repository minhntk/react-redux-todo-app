'use strict';

var mongoConnect = require('../db/MongoConnect');
var Schema = mongoConnect.Schema;
const uuidv4 = require('uuid/v4');

module.exports = class UserRepository {
    constructor(){
        this.taskSchema = new Schema({
            _id: { type: String, required: true, unique: true},
            title:  {type: String, required: true},
            description: {type: String, required: true},
            createdBy: {type: String, required: true}
        });
        this.Task = mongoConnect.model('Task', this.taskSchema);
    }

    findAll(){
        return new Promise((resolve, reject)=>{
            let taskList = [];
            this.Task.find({}, function(err, values){
                values.forEach(function(item){
                    taskList.push(item.toObject());
                })
                resolve(JSON.stringify(taskList));
            });
        });
    }


    saveTask(task){
        let taskModel = new this.Task({
                _id: uuidv4(),
                title: task.title || '',
                description:  task.description || '',
                status: task.status || 'TODO',
                createdBy: 'minhnguyen'
        });
        return new Promise((resolve, reject) =>{
            taskModel.save(function(err){
                if (err) {
                    reject(err);
                }
                resolve(taskModel);
            });
        });

    }
}