import React, { useState } from 'react'
import axios from 'axios'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateSchool = () => {
  
  const [sectionId, setSectionId] = useState('')
  const [faculty, setFaculty] = useState('')
  const [department, setDepartment] = useState('')
  const [numberOfStaff, setNumberOfStaff] = useState('')
  const [blockNumber, setBlockNumber] = useState('')
  const [loading, setLoading] = useState(false);
 


  const navigate = useNavigate()


  const handleSaveSchool = () =>{

    if(!sectionId || !faculty 
      || !department || !numberOfStaff || !blockNumber){
        toast.error('Fill up all required fields')

        return

    }
    const data = {
      sectionId: sectionId,
      faculty: faculty,
      department: department,
      numberOfStaff: numberOfStaff,
      blockNumber: blockNumber
    }
    setLoading(true)

    axios.post('http://localhost:3001/api/school/', data)
    .then(()=>{
      setLoading(false)
      toast.success("School Created Successfully")
      setTimeout(()=>{
        navigate('/')
      }, 2000)
      
    })
    .catch((error)=>{
      console.log(error)
      toast.error("Error: ", error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>

      <h1 className='text-3xl my-4'>Create School</h1>
      <div className='flex flex-col border-2 bordder-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Section Id</label>
          <input
          type='number'
          value={sectionId}
          required
          onChange={(e)=>setSectionId(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Faculty</label>
          <input
          type='text'
          value={faculty}
          required
          onChange={(e)=>setFaculty(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Department</label>
          <input
          type='text'
          value={department}
          required
          onChange={(e)=>setDepartment(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>No Of Staff</label>
          <input
          type='number'
          value={numberOfStaff}
          required
          onChange={(e)=>setNumberOfStaff(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Block Number</label>
          <input
          type='text'
          value={blockNumber}
          required
          onChange={(e)=>setBlockNumber(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <button className='p-2 bg-sky-300 m-8'
        onClick={handleSaveSchool}
        >
          Submit
        </button>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default CreateSchool