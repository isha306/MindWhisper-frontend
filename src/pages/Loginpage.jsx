import React from 'react'
import  "../pages/About.css"
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
    <section className="about mt-5 flex flex-row justify-between">
      <div className="about-image">
        <img src="https://cdn-icons-png.flaticon.com/512/11119/11119465.png" alt="Seán Halpin" />
      </div>
      <div className="about-content">
        <h2></h2>
        <p className='text-left'>
        We’re glad you’re taking the time to reflect on your mental health.  

Mental health often changes over time. You can have ups and downs, good days and bad days. Whatever you’re going through, you’re not alone. Help is available.   

This test will help you understand your level of distress. It will suggest support options and resources to help you based on your results.  
        </p>
        <div className='mt-5'>
        
        </div>
        
        </div>
       
    </section>
    <div className='bg-[#f5f5f5] w-full flex justify-center flex-col mt-10  h-40 items-center' >
        <p className='text-black font-Salsa'>
         Are You Ready To Take A Quiz
        </p>
        <Button
          variant="gradient"
          gradient={{ from: 'rgba(171, 159, 159, 1)', to: 'rgba(140, 191, 191, 1)', deg: 0 }} >
          <Link to={"/quiz"}> QUIZ</Link>
        </Button>
      </div>
    </div>
    
  );
};

export default About;