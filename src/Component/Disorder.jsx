import React from "react";
import Img1 from "../assets/card.jpeg"
import Img2 from"../assets/card1.webp"
import Img3 from"../assets/card3.png"
import Img4 from"../assets/card4.jpg"
import Img5 from"../assets/card5.jpg"
import { Button } from '@mantine/core'
import { Link } from "react-router-dom";


const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Depression",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Anxiety",
      
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Biploar",
     
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Schizophrenia",
     
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img5,
      title: "OCD",
     
      aosDelay: "800",
    },
  ];
  
  const Products = () => {
    return (
      <div className=" mb-12 ">
       <div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* card section */}
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                     
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* view all button */}
            <div className="flex justify-center mt-10">
            <Button
      variant="gradient"
      gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }}
    >
     <Link to={"/types"}> Know More</Link>
    </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;
  