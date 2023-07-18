import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../assets/Javasrcipt.jpg'
import img2 from '../assets/react .jpg'
import img3 from '../assets/sql.jpg'
import img4 from '../assets/Typescript.jpg'
import img5 from '../assets/node.jpg'
import img6 from '../assets/MD.jpg'



const SkillBased = () => {
  return (
   <div className='w-full py-[10rem] px-4 bg-white'>

        {/* <h1 className='text-2xl font-bold text-center py-12'>Role Based Roadmap</h1> */}
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img1} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Javascript</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img2} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>React</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img3} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>SQL</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img4} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Typescript</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img5} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>Node Js</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='w-full hover:bg-gray-200 shadow-2xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-30 mx-auto mt-[-3rem]' src={img6} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>MogoDB</h2>
        <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
        </div>
        </SwiperSlide>
        </Swiper>


      </div>
 
  )
}

export default  SkillBased