const Student = require('../models/Student.js')

const getStudents = async (req, res)=>{

    try {
        const studentgets = await Student.find({})
        res.status(200).json(studentgets)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getStudent = async (req, res)=>{
    try {
        
        const {id} = req.params;
        const student = await Student.findById(id)
        // to check if the student present in the database
        res.status(200).json(student)

    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

const createStudent = async (req, res)=>{
    try{
        const student = await Student.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const updateStudent = async (req, res)=>{
    try {
        const{id} = req.params;
        const studentUpdate  = await Student.findByIdAndUpdate(id, req.body)
        if(!studentUpdate){
            res.status(404).json({message: "Double check the Id ?"})
        }
        const updatedStudent = await Student.findById(id)
        res.status(200).json(updatedStudent)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteStudent = async (req, res)=>{
    try {
        const {id} = req.params;
        const studentDel = await Student.findByIdAndDelete(id)
        if(!studentDel){
            return res.status(404).json({message: "Student Details not Found"})  
        }

        res.status(200).json({message: "Student Detail Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}