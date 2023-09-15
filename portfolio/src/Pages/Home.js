import Products from "../components/Products";
import Contact from "./Contact";

const Home = () => {

    const homeStyle= {

        background : '	#B0C4DE',
        paddingLeft:'5rem',
        height:'45rem',
        fontSize:'6rem',
        
      }
      
    const bannerStyle = {
        height:'5rem',
        width:'5rem',
    }  

    return (

        <>

        <div style={homeStyle} className="hero py-16 ">
            <div className = "container mx-auto flex items-center justify-between">

                <div className = "w-1/2">
                     
                     <h2 className = "text-lg ml-6"> <em>Hi There!!</em> </h2> 
                     <h1 className="text-lg ml-6"><em>I am</em></h1><h1 className="font-bold ml-6"><em> Meghna Ranjan </em></h1>
                    <h4 className="ml-6 text-3xl md-text-6xl ">I am a Front end Developer</h4>
                     
                </div>
               
            </div>
        </div>

        <div className="pb-24 pl-24 pr-24 ml-5 mr-5">

            <Products/>
            
        </div>
        <div className="pb-24 pl-24 pr-24 ml-6 mr-6">Contact Me

            <Contact/>
            
        </div>
        

        </>
    )
}

export default Home;