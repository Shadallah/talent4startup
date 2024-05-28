const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: [true, "Please enter your fullname"]
        },

        studentid:{
            type: String,
            require: true
        },

        department:{
            type: String,
            require: true
        },

        level:{
            type: String,
            require: true
        },

        photo:{
            type: String,
            require: true
        }

    },

    {
        timestamps:true
    }
);

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;