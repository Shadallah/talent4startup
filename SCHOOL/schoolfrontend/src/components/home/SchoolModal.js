import React from 'react'
import axios from 'axios'
import SchoolSingleCard from './SchoolSingleCard'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { PiBuilding } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const SchoolModal = ({ schools, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopImmediatePropagation}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineEdit className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />

                <h2 className='absolute w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {schools.faculty}
                </h2>

                <h4 className='my-2 text-gray-500'>{schools.sectionId}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{schools.department}</h2>
                </div>

                <div className='flex justify-start items-center gap-x-2'>
                    <PiBuilding className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{schools.blockNumber}</h2>
                </div>

                <p className='mt-4'>School Brief...</p>
                <p className='my-2' >
                A multi level approval in Power Automate can be used to send an approval request to a 1st level approver, 2nd level approver and more. 
                The approval action returns a final outcome of either accepted or rejected and a full history of each approvers response with a timestamp.

                </p>

            </div>

        </div>
    )
}

export default SchoolModal