import React from 'react'
import img1 from '../assets/javascript.jpg'
import img2 from '../assets/react .jpg'
import img3 from '../assets/sql.jpg'
import img4 from '../assets/Typescript.jpg'
import img5 from '../assets/node.jpg'
import img6 from '../assets/MD.jpg'



const RoleBased = () => {
  return (
   <div className='w-full py-[10rem] px-4 bg-white'>
    {/* <h1 className='text-2xl font-bold text-center py-12'>Role Based Roadmap</h1> */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8'>
      <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img1} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Javascript</h2>
             
              <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={img2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>React</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={img3} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>SQL</h2>
            
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={img4} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Typescript</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={img5} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Node Js</h2>
             
              <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
          <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img6} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>MongoDB</h2>
             
              <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
      </div>
    </div>
  )
}

export default RoleBased