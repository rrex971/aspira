import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Student from "./screens/Student";
import Admin from "./screens/Admin";
import Sattendance from "./screens/Sattendance";
import Faculty from "./screens/Faculty";
import Sgrades from "./screens/Sgrades";
import { AnimatePresence } from 'motion/react'
import Facstatus from "./screens/Facstatus";

const App = () => {
  
  return (
    <>
      <Navbar /> 
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/student" element={<Student />}/>
            <Route path="/admin" element={<Admin />}/>

            <Route path="/Faculty"element = {<Faculty/>} />
            
            <Route path="/sattendance" element={<Sattendance/>}/>
            <Route path="/sgrades" element={<Sgrades/>}/>
            <Route path ="/facstatus" element ={<Facstatus/>}></Route>
          
            

            

          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  )
};

export default App;
