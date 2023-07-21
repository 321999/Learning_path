import React, { useState } from 'react';
import '../Style/Backend.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PopupPage from './PopupPage';
import topicsInfo from '../data/topicsInfo.json';



const Backend = () => {
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
           <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl">Back-end Developer </h1>
           <p className="text-sm text-gray-500 sm:text-lg">Step by step guide to becoming a modern Back-end developer in 2023</p>
        </div> 
  <hr/>
  <div className="timeline">
        <div className="outer">

          <div className="card">
          <div className="bcard1">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('backend')} >Backend<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
          </div>

          <div className='card'>
          <div className="bcard2">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('js')} >JS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div className="bcard3">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('python')} >Python<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div class="bline1"></div>

            <div className="bcard4">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Java')} >JAVA<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="bcard5">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Go')} >GO<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="bline2"></div>


            <div  className='bcard6'>
            <div className="info"> 
            <button className="titl font-bold">Learn Language<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>

            <div  className='bcard7'>
            <div className="info"> 
            <button className="titl font-bold">Repo Hosting<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>

            <div className="bcard8">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('git/github')} >GITHUB<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="bline3"></div>

            <div className="bcard9">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('GitLab')} >GITLAB<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="bline4"></div>

            <div className="bcard10">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Bitbucket')} >Bitbucket<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="bline5"></div>

          </div>
        


          <div className="card">
          <div  className='bcard11'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('databases')} >Database<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div class="bline6"></div>
            <div class="bline7"></div>


            <div className="bcard12">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('MONGOdB')} >MONGOdB<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div className="bcard13">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('MySQL')} >MySQL<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div className="bcard14">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Oracle')} >Oracle<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div className="bcard15">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('PostgreSQL')} >PostgreSQL<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div  className='bcard16'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('Testing')} >Testing<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
          

            <div className="bcard17">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Unit')} >Unit Testing<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div className="bcard18">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Integration')} >Integration Testing<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div  className='bcard19'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('Functional')} >Functional Testing<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div class="bline8"></div>
            <div class="bline9"></div>
            <div class="bline10"></div>

            </div>      

  </div>
  </div>   
  <PopupPage selectedTopic={selectedTopic} onClose={handleCloseTopic} open={isPopupOpen} />

</div>
  );
}


export default Backend