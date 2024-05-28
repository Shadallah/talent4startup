const express = require('express')
const mongoose = require('mongoose');
const Student = require('./models/Student.js');
const StudentRoutes = require('./routes/student.route.js') //importing route
const SchoolRoutes = require('../simplicit-backend/routes/school.router.js')
const UserRouter = require('./routes/user.route.js')

const cors = require('cors')
const app = express()
app.use(express.json()) //middleware that connect insomia
app.use(express.urlencoded({extended:false})) // to use form-encoded on thunder client and other api testing software e.g postman
const School = require('../simplicit-backend/models/schoolModel.js')

app.use(cors()) //importing cors to proctect cross-section server

// app.use(cors({
//     origin: "http://localhost/3001",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowHeaders: ['content-type']
// }))


app.get('/', (req, res)=>{
    res.send("Welcome to the HOME Screen")

})


// //School Post
// app.post('/api/school', async (req, res)=>{
//     try {
        
//         if (
//             !req.body.sectionId ||
//             !req.body.department ||
//             !req.body.faculty ||
//             !req.body.numberOfStaff ||
//             !req.body.blockNumber

//         ){
//             return res.status(400).send({message: 'Fields cannot be empty'})
//         }

//         const schoolCreate = await School.create(req.body)
//         res.status(200).json(schoolCreate)


//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// Get all schools
// app.get('/api/school', async (req, res)=>{

//         try{
//             const schoolsGet = await School.find({})
//             res.status(200).json({
//                 count: schoolsGet.length,
//                 data: schoolsGet
//             })
//         } catch (error) {
//             res.status(500).json({message: error.message})
//         }
// })

// Get schools by Id

// app.get('/api/school/:id', async (req, res)=>{
//     try {
        
//         const {id} = req.params;
//         const schoolget = await School.findById(id)
//         // to check if the student present in the database
//         res.status(200).json(schoolget)

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     } 
// })

app.put('/api/school/:id', async (req, res)=>{
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
})


//specify middleware route
app.use('/api/school', SchoolRoutes)
app.use('/api/students', StudentRoutes)
app.use('/api/school', UserRouter)




//testing insomia response -for testing api
app.post('/api/students', async (req, res)=>{
    try{
        const student = await Student.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



// Put test student from database
app.put('/api/students', async (req, res)=>{
    try{
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get All Students

// app.get('/api/students', async (req, res)=>{
//     try{
//         const student = await Student.find(req.body)
//         res.status(200).json(student)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//CRUD Operations
//get a student by ID
// app.get('/api/students/:id', async (req, res)=>{
//     try {
        
//         const {id} = req.params;
//         const student = await Student.findById(id)
//         // to check if the student present in the database
//         res.status(200).json(student)

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     } 
// })

//Using PUT to modify a record - Update data

// app.put('/api/students/:id', async (req, res)=>{
//     try {
//         const{id} = req.params;
//         const studentUpdate  = await Student.findByIdAndUpdate(id, req.body)
//         if(!studentUpdate){
//             res.status(404).json({message: "Double check the Id ?"})
//         }
//         const updatedStudent = await Student.findById(id)
//         res.status(200).json(updatedStudent)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//DELETE Operation - Delete a record from Database
// app.delete('/api/students/:id', async (req, res)=>{
//     try {
//         const {id} = req.params;
//         const studentDel = await Student.findByIdAndDelete(id)
//         if(!studentDel){
//             return res.status(404).json({message: "Student Details not Found"})  
//         }

//         res.status(200).json({message: "Student Detail Deleted Successfully!"})
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//testing insomia response -for testing api
// app.post('/api/students', (req, res)=>{
//     console.log(req.body)
//     res.send(req.body)
// })

// app.get('/studentProfile/api/data', (req, res) =>{
//     const data = [
//         {
//                 name: "Abdullahi",
//                 position: "Manager",
//                 status: "Part-time Staff",
//                 id: "ABD-003",
//                 salary: 5000000
//         },

//         {
//                 name: "Fatima",
//                 position: "Sales",
//                 status: "Full Staff",
//                 id: "ABD-004",
//                 salary: 7000000
//         },

//         {

//                 name: "Lukman",
//                 Position: "Technical",
//                 status: "Seasional Staff",
//                 id: "ABD-002",
//                 salary: 90000000
//         }
//     ];

//     res.json(data)
// })

//monRoute is the part I specify
app.get('/monRoute', (req, res)=>{
    res.send("This is nodemon test")
})

mongoose.connect("mongodb+srv://abdallahshadallah36:Abdollar%40ui@cluster0.etfqeci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection successful");
    app.listen(3001, (req, res)=>{
        console.log("server is running at Port 3001")
    })
})

.catch(()=>{
    console.log("connection Failed");
})
