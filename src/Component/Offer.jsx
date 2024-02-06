import React from "react";
import Img1 from "../assets/1.webp";
import { Button } from '@mantine/core'
import { Link } from "react-router-dom";


const ProductsData = [
  {
    id: 1,
    img:Img1,
    title: "Anlyzing Your Mental Health",
    description:
      "First We Analyze Your Mental Health To Discover Your Mental Health Problems",
  },
  {
    id: 2,
    img:Img1,
    title: "Start The Process Of Healing",
    description:
      "After Analyzing You Will Start Your Process Of Healing With Us In Free",
  },
  {
    id: 3,
    img:Img1,
    title: "Help You Overcome Your Mental Problem",
    description:
      "At Last With Our Help And Your Dedication We Overcome Your Mental Health Problems",
  },
];
const Offer = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            What We Offer
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-Salsa">
            Healing Process
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
           Mental Health Is Not A Weakness
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
               
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <Button
      variant="gradient"
      gradient={{ from: 'rgba(171, 159, 159, 1)', to: 'rgba(140, 191, 191, 1)', deg: 0 }}
    >
   <Link to={"/login"}> Login Now</Link>
    </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
