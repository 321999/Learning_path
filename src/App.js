import React from 'react';
// import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import RoleBased from './components/RoleBased';
import SkillBased from './components/SkillBased';


function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <RoleBased/>
       <Newsletter/>
       <SkillBased/> 
       <Footer/>
       {/* <Cards/>
       
      
       
     */}
    </div>
    
  );
}

export default App;
