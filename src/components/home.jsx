import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import RoleBased from './RoleBased';
import SkillBased from './SkillBased';
// import DevOps from './roadmap/DevOps';    
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import DevOps from './roadmap/DevOps';

import DevOps from '../roadmap/DevOps';
import Raam from './raam';
// import Home from "./compo
import PopupPage from "../Description/PopupPage"

function Home() {
  return (
    <div>
      {/* <BrowserRouter>  isko uncomment hona chahiye  isko comment hona hua then only u can  */}
      {/* <DevOps/> */}
        {/* <Navbar/> */}
        {/* <PopupPage/> */}

        <Hero/>
        <RoleBased/> 
        <Newsletter />
        <SkillBased/>
        <Footer/>
        {/* <Raam/> */}
        {/* <Routes> */}
          {/* <Route path="/Home/Hero" element={<Hero/>}></Route>
          <Route path="/roadmaps" element={<DevOps/>}></Route>
          <Route path="/about" element={<Raam/>}></Route>
          <Route path="/field" element={<Raam/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>

          </Routes> */}
      {/* </BrowserRouter> */}

      {/* instead of hell use checkcircle   <CheckCircleIcon/> */}
    </div>
  );
}

export default Home;
   


