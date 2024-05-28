import React, { useState } from 'react'
import axios from 'axios'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {BiUserCircle, BiShow} from 'react-icons/bi'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {PiBuilding} from 'react-icons/pi'
import {Link} from 'react-router-dom'
import SchoolModal from './SchoolModal'


const SchoolSingleCard = ({schools}) => {
    //console.log(schools)
  

    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <div
                    key={schools._id}
                    className='border-2 boreder-grey-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
                    >
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                        {schools.faculty}
                    </h2>

                    <h4 className='my-2 text-gray-500'>{schools.sectionId}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                        <h2 className='my-1'>{schools.department}</h2>
                    </div>

                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBuilding className='text-red-300 text-2xl'/>
                        <h2 className='my-1'>{schools.blockNumber}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle className='text-red-300 text-2xl'/>
                        <h2 className='my-1'>{schools.numberOfStaff}</h2>
    
                    </div>

                    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>

                        <BiShow className='text-3xl text-blue-800  hover:text-black cursor-pointer'
                        onClick={()=>setShowModal(true)}/>
                        

                        <Link to={`/schools/details/${schools._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800 hover:text-black cursor-pointer"/>
                        </Link>
                        
                        <Link to={`/schools/update/${schools._id}`}>
                        <AiOutlineEdit className="text-2xl text-blue-800 hover:text-black cursor-pointer"/>
                        </Link>
                        <Link to={`/schools/delete/${schools._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800 hover:text-black cursor-pointer"/>
                        </Link>
                        
                    </div>

                </div>
                {

showModal && (<SchoolModal schools={schools} onClose={()=>setShowModal(false)}/> )
}
                
    </div>
  )
}



export default SchoolSingleCard