import React, { useState } from 'react';
import "../Style/Frontend.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PopupPage from './PopupPage';
import topicsInfo from '../data/topicsInfo.json';

const Frontend = () => {
     const [selectedTopic, setSelectedTopic] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const showInfo = (topicName) => {
      setSelectedTopic(topicsInfo[topicName]);
      setIsPopupOpen(true); // Set isPopupOpen to true to open the popup
    };
  
    const handleCloseTopic = () => {
      setIsPopupOpen(false); // Set isPopupOpen to false to close the popup
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
            <button className="title font-bold" onClick={() => showInfo('internet')} >Internet<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
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
              <button
                  className="title font-bold"
                  onClick={() => showInfo('html')}
                >
                  HTML
                  <span style={{ color: 'green', padding: '10px' }}>
                    <CheckCircleIcon />
                  </span>
                </button>   
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
          <div className="card2">
            <div className="info">
            <button className="title2 font-bold" onClick={() => showInfo('css')} >CSS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
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
          <div  className='card3'>
            <div className="info"> 
            <button className="title1 font-bold" onClick={() => showInfo('project1')} >Project1<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span></button>        
            </div>
            </div>
          <div  className='card4'>
            <div className="info">
            <button className="title font-bold" onClick={() => showInfo('js')} >JavaScript<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
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
          <div  className='card5'>
            <div className="info"> 
            <button className="title1 font-bold" onClick={() => showInfo('project2')} >Project2<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
        
            </div>
            </div>

          <div className="card6">
            <div className="info">
            <button className="title2 font-bold" onClick={() => showInfo('bootstrap')} >Bootstrap<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
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
      </div>
      <PopupPage selectedTopic={selectedTopic} onClose={handleCloseTopic} open={isPopupOpen} />

    </div>
  );
}

export default Frontend;
