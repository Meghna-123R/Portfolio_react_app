import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
// import About from './Pages/About';
import Navigation from './components/Navigation';
import ProjectSection from './Pages/ProjectSection';
import Contact from './Pages/Contact';

const App = () => {

    return (
         <>
             <Router>
          
              <Navigation/>

               <Routes>     

                 <Route path="/" element={<Home/>} exact ></Route>
                 {/* <Route path="/about" element={<About/>}></Route> */}
                 <Route path="/projectsection" element={<ProjectSection/>}></Route>
                 <Route path="/contact" element={<Contact/>}></Route>

               </Routes>

            </Router> 
         </>
    );
   
}

export default App;