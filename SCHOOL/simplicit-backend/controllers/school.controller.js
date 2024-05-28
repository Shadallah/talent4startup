 const School = require('../models/schoolModel.js')


const getSchools = async (req, res)=>{

    try {
        const schoolgets = await School.find({})
        res.status(200).json({
            conunt: schoolgets.length,
            record: schoolgets
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getSchool = async (req, res)=>{
    try {
        
        const {id} = req.params;
        const schoolget = await School.findById(id)
        // to check if the student present in the database
        res.status(200).json(schoolget)

    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}



const createSchool = async (req, res) =>{

    try {
        
        if (
            !req.body.sectionId ||
            !req.body.department ||
            !req.body.faculty ||
            !req.body.numberOfStaff ||
            !req.body.blockNumber

        ){
            return res.status(400).send({message: 'Fields cannot be empty'})
        }

        const schoolCreate = await School.create(req.body)
        res.status(200).json(schoolCreate)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// const createSchool = async (req, res)=>{
//     try{
//         const schoolCreate = await School.create(req.body)
//         res.status(200).json(schoolCreate)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }


const updateSchool = async (req, res)=>{
    try {
        const{id} = req.params;
        const schoolUpdate  = await School.findByIdAndUpdate(id, req.body)
        if(!schoolUpdate){
            res.status(404).json({message: "Double check the Id ?"})
        }
        const updatedSchool = await School.findById(id)
        res.status(200).json(updatedSchool)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// delete school
 const deleteSchool = async (req, res)=>{
    try {
        const {id} = req.params;
        const schoolDel = await School.findByIdAndDelete(id)
        if(!schoolDel){
            return res.status(404).json({message: "School Details not Found"})  
        }

        res.status(200).json({message: "School Detail Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {
     getSchools,
     getSchool,
     createSchool,
     updateSchool,
     deleteSchool
 }