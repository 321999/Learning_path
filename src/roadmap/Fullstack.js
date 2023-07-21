import React, { useState } from 'react';
import '../Style/Fullstack.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PopupPage from '../Description/PopupPage';
import topicsInfo from '../data/topicsInfo.json';



const Fullstack = () => {
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
           <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl">Fullstack Developer </h1>
           <p className="text-sm text-gray-500 sm:text-lg">Step by step guide to becoming a modern Fullstack developer in 2023</p>
        </div> 
  <hr/>
      <div className="timeline">
        <div className="outer">

          <div className="card">
          <div className="card--0">
            <div className="info">
           <button className="titl font-bold" onClick={() => showInfo('frontend')} >Frontend<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

          <div className="card0">
            <div className="info">
            <button
                  className="titl font-bold"
                  onClick={() => showInfo('html')}
                >
                  HTML
                  <span style={{ color: 'green', padding: '10px' }}>
                    <CheckCircleIcon />
                  </span>
                </button>   
            </div>
            </div>
            <div className="card-0">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('css')} >CSS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
          </div>

          <div className="card">
          <div  className='card-3'>
            <div className="info">
            <button className="title-1 font-bold" onClick={() => showInfo('project1')} >Project1<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
             </div>
            </div>
            <div class="line"></div>

            <div className="card-1">
            <div className="info">
              
            <button className="titl font-bold" onClick={() => showInfo('js')} >JavaScript<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-4'>
            <div className="info"> 
            <button className="title-2 font-bold" onClick={() => showInfo('project2')} >Project2<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-1"></div>

            <div className="card-5">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('npm')} >NPM<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-6'>
            <div className="info"> 
            <button className="title-3 font-bold" onClick={() => showInfo('project3')} >Project3<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-2"></div>

          </div>

          <div className="card">
           <div className="card-7">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('git/github')} >GIT/GITHUB<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div className="card-8">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('bootstrap')} >Bootstrap<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-9'>
            <div className="info"> 
            <button className="title-4 font-bold" onClick={() => showInfo('project4')} >Project4<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-3"></div>

            <div className="card-10">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('react')} >React<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
          </div>

          <div className="card">
          <div  className='card-11'>
            <div className="info"> 
            <button className="title-5 font-bold" onClick={() => showInfo('project5')} >Project5<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-4"></div>
            
            <div className="card-12">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('backend')} >Backend<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div className="card-13">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('node')} >Node.js<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-14'>
            <div className="info"> 
            <button className="title-6 font-bold" onClick={() => showInfo('project6')} >Project6<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-5"></div>

          </div> 

          <div className="card">

          <div className="card-15">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('express')} >EXPRESS.JS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-16'>
            <div className="info"> 
            <button className="title-7 font-bold" onClick={() => showInfo('project7')} >Project7<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-6"></div>

            <div className="card-17">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('databases')} >Database<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
          
          </div> 

          <div className="card">
          <div className="card-18">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('MONGOdB')} >MONGOdB<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-19'>
            <div className="info"> 
            <button className="title-8 font-bold" onClick={() => showInfo('project8')} >Project8<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-7"></div>

            <div className="card-20">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('rest')} >RESTFUL API<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div className="card-21">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('jwt')} >JWT<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='card-22'>
            <div className="info"> 
            <button className="title-9 font-bold" onClick={() => showInfo('project9')} >Project9<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span></button>        
            </div>
            </div>
            <div class="line-8"></div>
          </div> 

</div>
</div>
<PopupPage selectedTopic={selectedTopic} onClose={handleCloseTopic} open={isPopupOpen} />
</div>

  );
}


export default Fullstack