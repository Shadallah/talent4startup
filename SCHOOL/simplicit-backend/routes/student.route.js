const express = require('express')
const Student = require('../models/Student.js');
const router = express.Router();
const {getStudents, getStudent, createStudent, updateStudent, deleteStudent} = require('../controllers/student.controller.js');

// GET all students
router.get('/', getStudents)

// GET student by Id
router.get('/:id', getStudent)

// Create Student
router.post('/', createStudent)

// Modify student by Id
router.put('/:id', updateStudent)

//Delete student by Id
router.delete('/:id', deleteStudent)


module.exports = router;