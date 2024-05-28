const express = require('express')
const router = express.Router();
const schoolModel = require('../models/schoolModel.js');
const {getSchools, getSchool, createSchool, updateSchool, deleteSchool} = require('../controllers/school.controller.js');
const { route } = require('./student.route.js');



// GET all students
router.get('/', getSchools)

//GET school by Id
router.get('/:id', getSchool)

//POST Create School
router.post('/', createSchool)

//PUT Update School Details
router.put('/:id', updateSchool)

//DEL Delete School
router.delete('/:id', deleteSchool)



module.exports = router