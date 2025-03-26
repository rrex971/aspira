import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Student from "./screens/Student";
<<<<<<< HEAD
import Admin from "./screens/Admin";
=======
import Sattendance from "./screens/Sattendance";
import Faculty from "./screens/Faculty";
<<<<<<< HEAD
import Sgrades from "./screens/Sgrades";
=======
>>>>>>> 1cc49b6f8fa025f55aad84262f4b1f6c06f3f77a
>>>>>>> d590514d53c743a5394ccdfda3bcf0838aba920c
import { AnimatePresence } from 'motion/react'


const App = () => {
  
  return (
    <>
      <Navbar /> 
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/student" element={<Student />}/>
            <Route path="/admin" element={<Admin />}/>
=======
            <Route path="/Faculty"element = {<Faculty/>} />
            <Route path="/student" element={<Student/>}/>
<<<<<<< HEAD
            <Route path="/sattendance" element={<Sattendance/>}/>
            <Route path="/sgrades" element={<Sgrades/>}/>
=======
            <Route path="/student/sattendance" element ={<Sattendance/>}/>
            <Route path="/student/sgrades" element={<Sgrades/>}/>
>>>>>>> 1cc49b6f8fa025f55aad84262f4b1f6c06f3f77a
>>>>>>> d590514d53c743a5394ccdfda3bcf0838aba920c
          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  )
};

export default App;
