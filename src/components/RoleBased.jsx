import React from 'react'
import Single from '../assets/front_End.jpg'
import Double from '../assets/Back_End.jpg'
import Triple from '../assets/Full stack.jpg'
import Four from '../assets/Data-analysis.jpg'
import five from '../assets/data-sci.jpg'
import six from '../assets/maching-learning.jpg'


const RoleBased = () => {
  return (
   <div className='w-full py-[10rem] px-4 bg-white'>
    {/* <h1 className='text-2xl font-bold text-center py-12'>Role Based Roadmap</h1> */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8'>
      <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Front-End</h2>
              
              <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-12'>Back-End</h2>
            
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-12'>Fullstack</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Four} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Data-Analysis</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={five} alt="/" />
              <h2 className='text-2xl font-bold text-center py-12'>Data-Science</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={six} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Machine Learning</h2>
             
              <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
      </div>
    </div>
  )
}

export default RoleBased