import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./screens/Home";

import Faculty from "./screens/Faculty";
import FLogin from "./screens/FLogin";
import FAttendance from "./screens/FAttendance";
import FGrades from "./screens/FGrades";
import FAssignment from "./screens/FAssignment";
import FCourses from "./screens/FCourses";

import SAttendance from "./screens/SAttendance";
import SLogin from "./screens/SLogin";
import SGrades from "./screens/SGrades";
import STimetable from "./screens/STimetable";
import Student from "./screens/Student";

import Admin from "./screens/Admin";
import ALogin from "./screens/ALogin";
import AAcademicHistory from "./screens/AAcademicHistory";
import ARegister from "./screens/ARegister";
import AAdmissions from "./screens/AAdmissions";
import AStudentProfiles from "./screens/AStudentProfiles";
import AFaculty from "./screens/AFaculty";


import { AnimatePresence } from 'motion/react'


const App = () => {
  
  return (
    <>
      <Navbar /> 
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/student" element={<Student />}/>
            <Route path="/student/attendance" element ={<SAttendance/>}/>
            <Route path="/student/grades" element={<SGrades/>}/>
            <Route path="/student/timetable" element={<STimetable/>}/>
            <Route path="/student/login" element={<SLogin />} />

            <Route path="/admin" element={<Admin />}/>
            <Route path="/admin/studentprofiles" element={<AStudentProfiles />}/>
            <Route path="/admin/academichistory" element={<AAcademicHistory />}/>
            <Route path="/admin/admissions" element={<AAdmissions />}/>
            <Route path="/admin/facultyrecords" element={<AFaculty />}/>
            <Route path="/admin/login" element={<ALogin />} />
            <Route path="/admin/registerstudent" element={<ARegister category="Student"/>}/>
            <Route path="/admin/registerfaculty" element={<ARegister category="Faculty"/>}/>

            <Route path="/faculty" element = {<Faculty/>} />
            <Route path="/faculty/attendance" element={<FAttendance/>}/>
            <Route path="/faculty/assignment" element={<FAssignment/>}/>
            <Route path="/faculty/grades" element={<FGrades/>}/>
            <Route path="/faculty/courses" element={<FCourses/>}/>
            <Route path="/faculty/login" element={<FLogin />} />
        
            
            
          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  )
};

export default App;
