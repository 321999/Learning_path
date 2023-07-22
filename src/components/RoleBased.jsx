import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Single from '../assets/front_End.jpg'
import Double from '../assets/Back_End.jpg'
import Triple from '../assets/full-stack developer.jpg'
import Four from '../assets/Data-analysis.jpg'
import five from '../assets/2807756_18131.jpg'
import six from '../assets/maching-learning.jpg'


const RoleBased = () => {
  return (
    
    <div className='w-full py-[5rem] px-2 bg-white '>
      <h1 className=' drop-shadow-lg  md:text-5xl sm:text-4xl text-xl font-bold py-4 text-center mt-1 mb-12 pb-12 '>Role Baesd RoadMaps</h1>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={40}
    slidesPerView={4}
    // navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}shadow-inner
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide> 
       <div className='w-full  hover:bg-gray-200 shadow-2xl drop-shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
       <img className=' w-30 mx-auto mt-[-3rem]' src={Single} alt="/" />
       <h2 className='text-2xl font-bold text-center py-8'>Front-End</h2>
       <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-4 mx-auto px-6 py-3'>Start</button>
       </div>
    </SwiperSlide>


    <SwiperSlide> 
    <div className='w-full  hover:bg-gray-100 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-30 mx-auto mt-[-3rem]' src={Double} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Back-End</h2>
      <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
    </div>
      </SwiperSlide>
    <SwiperSlide> 
    <div className='w-full  hover:bg-gray-100 shadow-2xl drop-shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-30 mx-auto mt-[-3rem]' src={Triple} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Full-Stack</h2>
      <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
    </div>
      </SwiperSlide>
    <SwiperSlide> 
    <div className='w-full  hover:bg-gray-100 shadow-2xl flex flex-col p-3 my-3 rounded-lg hover:scale-105 duration-300'>
      <img className='w-30 mx-auto mt-[-3rem]' src={Four} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Data-Analysis</h2>
      <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
    </div>
      </SwiperSlide>
    <SwiperSlide> 
    <div className='w-full  hover:bg-gray-100 shadow-2xl drop-shadow-2xl flex flex-col p-3 my-3 rounded-lg hover:scale-105 duration-300'>
      <img className='w-30 mx-auto mt-[-3rem]' src={five} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Data-Science</h2>
      <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
    </div>
      </SwiperSlide>
    <SwiperSlide> 
    <div className='w-full  hover:bg-gray-100 shadow-2xl  flex flex-col p-3 my-3 rounded-lg hover:scale-105 duration-300'>
      <img className='w-30 mx-auto mt-[-3rem]' src={six} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>Machine-Learning</h2>
      <button className='bg-black text-[#00df9a] w-[150px] hover:text-gray-100 shadow-2xl rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
    </div>
      </SwiperSlide>
  </Swiper>

  </div>

 
  )
}

export default RoleBased

