
import React, { useEffect, useState } from "react"
import axios from 'axios'
import SchoolsCard from './home/SchoolsCard'
import SchoolsTable from './home/SchoolsTable'
import Spinner from './elements/Spinner'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'


 const Home = () => {

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showtype, setShowType] = useState(`table`)

  useEffect(()=>{

    setLoading(true)
    axios.get(`http://localhost:3001/api/school`)
    .then((res)=>{
      setSchools(res.data.record)
      //console.log(res.data.record)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }, [])

  const handleLogout = () =>{
    localStorage.removeItem('idtoken')
    Navigate('/')
  }
  return (
  <div className="p-4">
    <div className="flex justify-center items-center gap-x-4">

      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
      onClick={()=>setShowType('table')}>

    Table
      </button>


      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
      onClick={()=>setShowType('card')}
      >
      Card

      </button>
    </div>
  

    <div className="flex justify-between items-center">
    <h1 className="text-3xl my-5  text-wrap:balance">SCHOOLS SECTION</h1>
  <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>

      <Link to ='/schools/create'>
      <MdOutlineAddBox className="text-sky-800 text-4xl"/>
      </Link>

    </div>

  
    {loading ? <Spinner/> : showtype === "table" ? (<SchoolsTable schools={schools}/>) : (<SchoolsCard schools={schools}/>)}
 
  </div>
  )
}

export default Home