import React from "react";
import Banner from "../assets/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-1xl font-semibold">
          <div className=' w-full flex justify-center flex-col mt-10 h-8 items-center' >
                <p className='text-white font-Salsa'>
                    Thank You For visting Us
                </p>
                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary '>Contact us</button>
            </div>
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
