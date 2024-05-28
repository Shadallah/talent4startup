import React from 'react'
import axios from 'axios'
import SchoolSingleCard from './SchoolSingleCard'

const SchoolsCard = ({schools}) => {
  return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
            schools.map((school)=>(

                   <SchoolSingleCard key={school._id} schools={school}/>
                ))
            }
        <div/>
        
    </div>
  )
}

export default SchoolsCard