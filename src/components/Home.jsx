import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center'>
      <p className='  sm:text-4xl text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tran Thanh Truc</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px] :'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates distinctio sapiente error. Facere doloremque animi voluptas totam officiis voluptatem, itaque, esse aperiam quo exercitationem consectetur officia vitae expedita veritatis?</p>

          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500'>View Work
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
             </button>
           
          </div>
      </div>
          
    </div>
  )
}

export default Home