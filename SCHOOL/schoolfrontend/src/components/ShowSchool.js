import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'

const ShowSchool = () => {

  const [school, setSchool] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3001/api/school/${id}`)
    .then((response)=>{
       setSchool(response.data)
       console.log(response.data.record)
       setLoading(false)
  })
  .catch((error)=>{
    console.log(error)
    setLoading(false)
  })
}, [])
  return (

    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show School</h1>
      {
        loading ? (
          <Spinner/>
        ):(
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Id</span>
              <span>{school._id}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Section ID</span>
              <span>{school.sectionId}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Faculty</span>
              <span>{school.faculty}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Department</span>
              <span>{school.department}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Number Of Staff</span>
              <span>{school.numberOfStaff}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Block Number</span>
              <span>{school.blockNumber}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Created Date</span>
              <span>{new Date(school.createdAt).toString()}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Updated Date</span>
              <span>{new Date(school.updatedAt).toString()}</span>
            </div>

          </div>
        )
      }
    </div>
  )
}
 
export default ShowSchool