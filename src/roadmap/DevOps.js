import React, { useState } from 'react';
import '../Style/DevOps.css'
import PopupPage from './PopupPage';
import topicsInfo from '../data/topicsInfo.json';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const DevOps = () => {
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
           <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl">DevOps Developer </h1>
           <p className="text-sm text-gray-500 sm:text-lg">Step by step guide to becoming a modern DevOps developer in 2023</p>
        </div> 
  <hr/>
      <div className="timeline">
        <div className="outer">

          <div className="card">
          <div className="dcard1">
            <div className="info">
            <h3 className="titl font-bold"><a href='#'>DevOps</a><span style={{color:'green', padding:'10px'}}><CheckCircleIcon/></span></h3>
            </div>
            </div>
          </div>

          <div className='card'>
          <div className="dcard2">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('python')} >Python<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>

            <div className="dcard3">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('js')} >JS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /> </span> </button>        
            </div>
            </div>
            <div class="dline1"></div>

            <div className="dcard4">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Rust')} >Rust<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="dcard5">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Go')} >GO<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline2"></div>


            <div  className='dcard6'>
            <div className="info">
            <button className="titl font-bold">Learn a Programming Language<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>

            <div  className='dcard7'>
            <div className="info">
            <button className="titl font-bold">Operating System<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>

            <div className="dcard8">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Linux')} >Linux<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline3"></div>

            <div className="dcard9">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Unix')} >Unix<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline4"></div>

            <div className="dcard10">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Windows')} >Windows<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline5"></div>

          </div>
        


          <div className="card">
          <div  className='dcard11'>
            <div className="info"> 
            <button className="titl font-bold">Networking, Security and Protocols<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline6"></div>
            <div class="dline7"></div>


            <div className="dcard12">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('HTTP')} >HTTP<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="dcard13">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('SSH')} >SSH<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="dcard14">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('HTTPS')} >HTTPS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="dcard15">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('SSL')} >SSL<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard16'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Containers')} >Containers<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div class="dline8"></div>

            <div className="dcard17">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('LXC')} >LXC<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div className="dcard18">
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Docker')} >Docker<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>

            <div  className='dcard19'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('Infrastructure')} >Infrastructure Management<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard20'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Configuration')} >Configuration Management<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
           

          </div>

          <div className='card'>
          <div  className='dcard21'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Container')} >Container Orchestration<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div  className='dcard22'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('VCS')} >VCS Hosting <span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard23'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('git/github')} >GitHub<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard24'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('GitLab')} >GitLab<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div  className='dcard25'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Bitbucket')} >Bitbucket<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div class="dline9"></div>
            <div class="dline10"></div>
            <div class="dline11"></div>
          </div>

          <div className='card'>
           <div  className='dcard26'>
            <div className="info"> 
            <button className="titl font-bold">Application Monitoring<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard27'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('AppDynamics')} >AppDynamics<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard28'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('Datadog')} >Datadog<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard29'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('OpenTelemetry')} >OpenTelemetry<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div class="dline12"></div>
            <div class="dline13"></div>
            <div class="dline14"></div>

            <div  className='dcard30'>
            <div className="info"> 
            <button className="titl font-bold" >Infrastructure Monitoring<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>

            <div  className='dcard31'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Prometheus')} >Prometheus<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div  className='dcard32'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Zabbix')} >Zabbix<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div class="dline15"></div>
            <div class="dline16"></div>

            <div  className='dcard33'>
            <div className="info"> 
            <button className="titl font-bold">Cloud Providers<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard34'>
            <div className="info"> 
            <button className="titl font-bold" onClick={() => showInfo('AWS')} >AWS<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
            </div>
            </div>
            <div  className='dcard35'>
            <div className="info">
            <button className="titl font-bold" onClick={() => showInfo('Azure')} >Azure<span style={{ color: 'green', padding: '10px' }}><CheckCircleIcon /></span> </button>        
             </div>
            </div>
            <div class="dline17"></div>
            <div class="dline18"></div>
          </div>
        
           
</div>
</div>
<PopupPage selectedTopic={selectedTopic} onClose={handleCloseTopic} open={isPopupOpen} />

</div>

  );
}


export default DevOps
