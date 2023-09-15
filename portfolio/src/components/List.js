import React from 'react'

const Product = () => {
    const cardStyle = {
        background:'		#DCDCDC',
        padding:'2rem',
        borderRadius:'3rem',
    }  
  return (
    <>
            <div style={cardStyle}>
                <img src="Images/anise.png"  alt= "Anis"></img>
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>Anise Website</h2>
                    <button className='bg-gray-200 py-1 rounded-full text-sm px-4'>Ecommerce Website</button>
                </div>    
                
                <div className='flex justify-between items-center mt-4'>
                    <span>Tech Stack : HTML,CSS,JavaScript</span>
                    <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>Visit Repository</button>
                </div>
            </div>


            <div style={cardStyle}>
                <img src="/Images/Rims.png"  alt= "Rims"></img>
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>Rims Website</h2>
                    <button className='bg-gray-200 py-1 rounded-full text-sm px-4'>React Cart App</button>
                </div>    
                
                <div className='flex justify-between items-center mt-4'>
                    <span>Tech Stack : React.Js, Tailwind CSS</span>
                    <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>Visit Repository</button>
                </div>
            </div>


           
    </>
  )
}

export default Product