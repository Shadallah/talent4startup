import React from 'react'
import axios from 'axios'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'

const SchoolsTable = ({schools}) => {
  return (
   
         <table className='w-full border border-separate border-spacing'>

<thead>
  <tr>
    <th className= 'border border-slate-200 rounded-md'>S/N</th>
    <th className= 'border border-slate-200 rounded-md max-md:hidden'>Section Id</th>
    <th className='border border-slate-300 rounded-md'>Faculty</th>
    <th className="border border-slate-300 rounded-md max-md:hidden">Department</th>
    <th className="border border-slate-300 rounded-md max-md:hidden">No of Staff</th>
    <th className="border border-slate-300 rounded-md max-md:hidden">Block Number</th>
    <th className="border border-slate-300 rounded-md max-md:hidden">Action</th>
  </tr>
</thead>

<tbody>
  {
    schools.map((school, index)=>(

      <tr key={school._id} className="h-5">
        <td className="border border-slate-700 rounded-md text-center">
          {index + 1}</td>
        <td className="border border-slate-700 rounded-md text-center">{school.sectionId}</td>
        <td className="border border-slate-700 rounded-md text-center">{school.faculty}</td>
        <td className="border border-slate-700 rounded-md text-center">{school.department}</td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">{school.numberOfStaff}</td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">{school.blockNumber}</td>

      <td className="border border-slate-700 rounded-md text-center">
      <div className="flex justify-center gap-x-4">
      <Link to={`/schools/details/${school._id}`}>
        <BsInfoCircle className="text-2xl text-green-800"/>
        
      </Link>
      <Link to={`/schools/update/${school._id}`}>
        <AiOutlineEdit className="text-2xl text-blue-800"/>
        
      </Link>
      <Link to={`/schools/delete/${school._id}`}>
        <MdOutlineDelete className="text-2xl text-red-800"/>
        
      </Link>
      </div>
      </td>
   
      </tr>
    ))
  }
</tbody>
</table>
  
  )
}

export default SchoolsTable