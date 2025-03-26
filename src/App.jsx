import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import { AnimatePresence } from 'motion/react'


const App = () => {

  return (
    <>
      <Navbar /> 
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  )
};

export default App;
