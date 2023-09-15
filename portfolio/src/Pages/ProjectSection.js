import React from 'react'
import List from '../components/List'



const ProjectSection = () => {
  return (
    <div className='container mx-auto pb-24 pl-24'>

        <h1 className='text-lg font-bold my-8 '>Checkout My Projects</h1>

        <div className='grid grid-cols-2 my-4 gap-60 mt-20 mr-20 ml-20'>
          
            <List/>


        </div>     
        
    </div>
  )
}

export default ProjectSection