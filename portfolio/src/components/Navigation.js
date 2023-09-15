import { Link } from 'react-router-dom';


const Navigation = () => {
  const iconStyle= {
    
    display : 'flex',
    padding: '3px 4px',
    height: '2rem',
    width : '2rem',
    borderRadius : '20px',
    marginLeft:'6rem',
   
    
  }
  const headerStyle={
    background: '	#000000',
    padding:'3px 4px',
    color:'white',
    paddingRight:'3rem',
  }
  return (
    <>
        <nav style={headerStyle} className='container mx-auto flex items-center justify-between py-4'>

          
           
            <Link to="https://github.com/Meghna-123R">
            <img style={iconStyle} src='/images/🦆 icon _github_.svg' alt='logo'></img>
            </Link>
            

            <ul className='flex items-center'>
              <li >
                <Link to="/">Home</Link>
              </li>

              <li className='ml-6'>
                <Link to="/ProjectSection">Projects</Link>
              </li>
              <li className='ml-6'>
                <Link to="/Contact">Contact Me</Link>
              </li>

              
            </ul>
          

          

        </nav>
    </>
  )
}

export default Navigation;