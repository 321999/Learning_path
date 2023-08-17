import React, { useState } from 'react';
import "../Styl/Frontend.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PopupPage from './PopupPage';


const Frontend = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  return (
    <div>
         <div className="timeline1 mx-auto px-60 sm:px-70 bg-blue-100 py-8">  
           <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl">Frontend Developer </h1>
           <p className="text-sm text-gray-500 sm:text-lg">Step by step guide to becoming a modern frontend developer in 2023</p>
  </div> 
  <hr/>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
            <h3 className="title font-bold">
                <a href="#" onClick={togglePopup}>
                  INTERNET
                </a> <span style={{color:'green'}}>hell</span></h3> 
             <div className='content'>
             <div class="inline-content"><a href="#">How does the Internet work?</a></div>               
              <div><a href='#'>What is HTTP?</a></div>
              <div><a href='#'>Browsers and how they work?</a></div>
              <div><a href='#'>DNS and how it works?</a></div> 
              <div><a href='#'>What is hosting?</a> </div>
             </div>
            </div>
          </div>
         
          <div className="card">
          <div  className='card1'>
            <div className="info">
              <h3 className="title1 font-bold"><a href='#'>Project0</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content1'>
              <div><a href='#'>How does the Internet work?</a></div>
              <div><a href='#'>What is HTTP?</a></div>
             </div>
            </div>
            </div>

            <div  className='card2'>
            <div className="info">
              <h3 className="title font-bold"><a href='#'>HTML</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content'>
              <div><a href='#'>Learn the basics</a></div>
              <div><a href='#'>Forms and Validations</a></div>
              <div><a href='#'>Conventions and Best Practices</a></div>
              <div><a href='#'>Accessibility</a></div> 
              <div><a href='#'>SEO Basics</a> </div>
             </div>
            </div>
            </div>
          </div>
        
          <div className="card">
          <div  className='card3'>
            <div className="info"> 
              <h3 className="title1 font-bold"><a href='#'>Project1</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content1'>
              <div><a href='#'>How does the Internet work?</a></div>
              <div><a href='#'>What is HTTP?</a></div>
             </div>
            </div>
            </div>

          <div className="card4">
            <div className="info">
            <h3 className="title2 font-bold"><a href='#'>CSS</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
            <div className='content'>
              <div><a href='#'>Learn the basics</a></div>
              <div><a href='#'>Making Layouts</a></div>
              <div><a href='#'>Responsive design and Media Queries</a></div>
              <div><a href='#'>Learn and Practice flex</a></div> 
              <div><a href='#'>Learn CSS Grid</a> </div>
             </div>
             </div>
            </div>
          </div>

         

          <div className="card">
          <div  className='card5'>
            <div className="info"> 
              <h3 className="title1 font-bold"><a href='#'>Project2</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content1'>
              <div><a href='#'>How does the Internet work?</a></div>
              <div><a href='#'>What is HTTP?</a></div>
             </div>
            </div>
            </div>
          <div  className='card6'>
            <div className="info">
            <h3 className="title font-bold"><a href='#'>JAVASCRIPT</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
            <div className='content'>
              <div><a href='#'>Syntax and Basic Constructs</a></div>
              <div><a href='#'>Learn DOM Manipulation</a></div>
              <div><a href='#'>Learn Fetch API / Ajax (XHR)</a></div>
              <div><a href='#'>ES6+ and modular JavaScript</a></div> 
              <div><a href='#'>JS Async</a> </div>
             </div>

            </div>
            </div>
          </div>

          


          <div className="card">
          <div  className='card7'>
            <div className="info"> 
              <h3 className="title1 font-bold"><a href='#'>Project3</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content1'>
              <div><a href='#'>How does the Internet work?</a></div>
              <div><a href='#'>What is HTTP?</a></div>
             </div>
            </div>
            </div>

          <div className="card8">
            <div className="info">
              <h3 className="title2 font-bold"><a href='#'>BOOTSTRAP</a><span style={{color:'green', padding:'10px'}}>hell</span></h3>
              <div className='content'>
              <div><a href='#'>What is Bootstrap?</a></div>
              <div><a href='#'>What is Bootstrap?</a></div>
              <div><a href='#'>import Bootstrap</a></div>
              <div><a href='#'>Why Use Bootstrap?</a></div> 
              <div><a href='#'>Bootstrap 5 Grid</a> </div>
             </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {showPopup && <PopupPage />}
      </div>
    </div>
  );
}

export default Frontend;
