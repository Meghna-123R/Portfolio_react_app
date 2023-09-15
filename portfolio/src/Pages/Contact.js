
import React from 'react'

const Contact = () => {
  const Cstyle={
    background : '	#B0C4DE',
    paddingRight:'2rem',
    paddingLeft:'2rem',
    paddingTop:'5rem',
   
    height:'55rem',
    fontSize:'2rem',
  }
  const formStyle = {
    background:'		#DCDCDC',
    padding:'2rem',
    borderRadius:'3rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  }  
  const inputStyle={
    height:'3rem',
    width:'40rem',
    
  }
  return (
    <div style={Cstyle}>
    <form style={formStyle} >
      <label>Enter your name: </label>
      <input style={inputStyle}
        type="text" 
        name="username" 
      />
     
      <label>Email Address : </label><hr></hr>
      <input style={inputStyle}
       type="email"/>

      <label>Enter your age:</label>
        <input style={inputStyle}
          type="number" 
          name="age" 
        />
        

        <label>Message  </label>
          <input className='pb-40'style={inputStyle}
          type="text"
          name = "message" />

          <button className='mt-20'type="submit"> 
           Submit
         </button> 
      
         
    </form>
    </div>
  )
}

export default Contact