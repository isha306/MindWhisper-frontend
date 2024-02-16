import React from "react";
import BannerImg from "../assets/women2.jpg";



const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
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
              Mental Health
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Taking Care Of Your Mental Health Is An Act Of Self Love
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                
                <p className="text-yellow-500"> ~ Love Yourself</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                
                <p className="text-red-500"> ~ Take Care Of Your Self</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                
                <p className="text-green-500"> ~ Happiness Is Key</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
               
                <p className="text-blue-500"> ~ Get Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;