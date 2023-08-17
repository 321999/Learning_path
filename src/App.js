import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NNavbar from './components/NNavbar';

import Newsletter from './components/Newsletter';
import RoleBased from './components/RoleBased';
import SkillBased from './components/SkillBased';
// import DevOps from './roadmap/DevOps';    
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DevOps from './roadmap/DevOps';
import Raam from './components/raam';
// import Home from './component/Home';
import Home from './components/home';

function App() {
  return (
    <div>
      {/* <BrowserRouter>  isko uncomment hona chahiye  isko comment hona hua then only u can  */}
      {/* <DevOps/> */}
        <Navbar/>
      {/* <Home/> */}

        {/* new navbar */}
        {/* <NNavbar/> */}

 
        {/* <Hero/>
        <RoleBased/>
        <Newsletter />
        <SkillBased/>
        <Footer/>
        <Raam/> */}
        <Routes>
          <Route path="/Hero" element={<Hero/>}></Route>
          <Route path="/roadmaps" element={<DevOps/>}></Route>
          <Route path="/about" element={<Raam/>}></Route>
          <Route path="/field" element={<Raam/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          
          <Route path='/' element={<Home/>}></Route>


          </Routes>
      {/* </BrowserRouter> */}

      {/* instead of hell use checkcircle   <CheckCircleIcon/> */}
    </div>
  );
}

export default App;
