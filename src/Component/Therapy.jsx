import React from 'react'
import BannerImg from "../assets/read & music.jpg";
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div>
    <div className="min-h-[550px] flex justify-center  items-center py-12 sm:py-0">
    
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* image section */}
        <div data-aos="zoom-in">
          <img
            src={BannerImg}
            alt=""
            className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
        </div>

        {/* text details section */}
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 data-aos="fade-up" className="text-3xl text-[#caa887] sm:text-4xl font-Salsa">
            Therapy
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5"
          >
            Yoga , Books , Music
          </p>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
              
              <p className="text-black"> Music and yoga are the two most popular forms of mind, body, and 
            spirit therapy in the world today. Each has its own set of therapeutic
             effects. When performed together, however, they create a one-two punch
              that can be more powerful than either form alone.Music has been proven to relax the muscles, 
             and may stabilize pulse rate and respiration, as well as decrease 
             stress levels. In fact, it is used by hospitals to help patients deal
              with anxiety and trauma.</p>
                    </div>
                    <div>
                    <p className="text-black"> Yoga is also known for reducing stress. Nonetheless, because 
            it involves deep breathing exercises plus a specific focus on
             poses,designed to loosen tense muscles or joints, yoga can do 
             much more to improve the flow of energy in the body. </p>
                    </div>
                    
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  <div className="flex justify-center">
            <Button
      variant="gradient"
      gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }}
    >
     <Link to={"/therapy"}>Therapy</Link>
    </Button>
            </div>
  </div>
  )
}

export default Slider