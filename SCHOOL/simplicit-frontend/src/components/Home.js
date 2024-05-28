import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Spinner from './elements/Spinner'
//import { FaBeer, FaEye, FaPen } from "react-icons/fa";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import { Link } from "react-router-dom"


const Home = () => {

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{

    setLoading(true)
    axios.get('http://localhost:3001/api/school')
    .then((res)=>{
      setSchools(res.record.record)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }, [])
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">SCHOOLS SECTION</h1>
        <link to='/schools/create'>
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>

        </link>
      </div>

      {
          loading ? (
            <Spinner/>
          ):(
            <table className="w-full border-seperate border-spacing">

                <thead>
                  <tr>
                    <th className="border-slate-600 rounded-md">Section Id</th>
                    <th className="border-slate-600 rounded-md">Faculty</th>
                    <th className="border-slate-600 rounded-md max-md:hidden">Department</th>
                    <th className="border-slate-600 rounded-md max-md:hidden">Block Number</th>
                    <th className="border-slate-600 rounded-md ">No of Staff</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    schools.map((school, index)=>(

                      <tr key={school.id}>

                      </tr>
                    ))
                  }
                </tbody>
              </table>
          )
      }
    </div>
  )
}

export default Home