'use strict';

var mongoConnect = require('../db/MongoConnect');
var Schema = mongoConnect.Schema;
const uuidV4 = require('uuid/v4');

module.exports = class UserRepository {
    constructor(){
        this.userSchema = new Schema({
            _id: { type: String, default: uuidV4},
            username:  {type: String, required: true, unique: true},
            password: {type: String, required: true}
        });
        this.User = mongoConnect.model('User', this.userSchema);
    }

    findAll(){
        return new Promise((resolve, reject)=>{
            let userList = [];
            this.User.find({}, function(err, values){
                values.forEach(function(item){
                    userList.push(item.toObject());
                })
                resolve(JSON.stringify(userList));
            });
        });

    }

    save(){
        let user = new this.User({ username: 'minhnguyen', password: '123456' });

        user.save(function(err){
            if (err) {
                console.log(err);
            }
        });
    }
}