import React from "react"
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact"
import Service from "../pages/Service";
import {Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const App = () => {
  return(
    <>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/service" element={<Service/>}></Route>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;