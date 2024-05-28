import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateSchool = () => {
  
  const [sectionId, setSectionId] = useState('')
  const [faculty, setFaculty] = useState('')
  const [department, setDepartment] = useState('')
  const [numberOfStaff, setNumberOfStaff] = useState('')
  const [blockNumber, setBlockNumber] = useState('')
  const [updatedSchool, setUpdatedSchool] = useState('')
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3001/api/school/${id}`)
    .then((response)=>{
      // setSectionId(response.data.sectionId)
      // setFaculty(response.data.faculty)
      // setDepartment(response.data.department)
      // setNumberOfStaff(response.data.numberOfStaff)
      // setBlockNumber(response.data.blockNumber)
      setUpdatedSchool(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      toast.error("Error: ", error)
    })
  })

  const handleUpdateSchool = () =>{

    // if(!sectionId || !faculty 
    //   || !department || !numberOfStaff || !blockNumber){
    //     toast.error('Fill up all required fields')

    //     return

    // }
    const data = {
      sectionId: sectionId,
      faculty: faculty,
      department: department,
      numberOfStaff: numberOfStaff,
      blockNumber: blockNumber
    }
    setLoading(true)

    axios.put(`http://localhost:3001/api/school/${id}`, data)
    .then(()=>{
      setLoading(false)
      toast.success("School Updated Successfully")
      setTimeout(()=>{
        navigate('/')
      }, 1000)
      
    })
    .catch((error)=>{
      console.log(error)
      toast.error("Error: ", error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>

      <h1 className='text-3xl my-4'>Update School</h1>
      <div className='flex flex-col border-2 bordder-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Section Id</label>
          <input
          type='number'
          placeholder={updatedSchool.sectionId}
          //value={sectionId}
          //required
          onChange={(e)=>setSectionId(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Faculty</label>
          <input
          type='text'
          placeholder={updatedSchool.faculty}
          value={faculty}
          //required
          onChange={(e)=>setFaculty(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Department</label>
          <input
          type='text'
          placeholder={updatedSchool.department}
          value={department}
          //required
          onChange={(e)=>setDepartment(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>No Of Staff</label>
          <input
          type='number'
          placeholder={updatedSchool.numberOfStaff}
          value={numberOfStaff}
          //required
          onChange={(e)=>setNumberOfStaff(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Block Number</label>
          <input
          type='text'
          placeholder={updatedSchool.blockNumber}
          value={blockNumber}
          //required
          onChange={(e)=>setBlockNumber(e.target.value)}
          className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <button className='p-2 bg-sky-300 m-8'
        onClick={handleUpdateSchool}
        >
          save
        </button>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default UpdateSchool