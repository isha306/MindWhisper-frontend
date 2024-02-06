import React from 'react'
import  "../pages/About.css"
import Social from '../Component/Social'
import Card from '../Component/Card';
import IMG1 from "../assets/isha.jpg";
import IMG2 from "../assets/mani.jpg";
import IMG3 from "../assets/akanksha.jpg";
import { useEffect } from "react"

const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  
  return (
    
   <div>
   <section className="about mt-5">
      <div className="about-image">
        <img src="https://cdn-icons-png.freepik.com/512/8171/8171535.png" alt="Seán Halpin" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We offer services like anlyzing the mental health with help of quiz and then give therapy to cure your mental health and We also offer community to help you connect to people like U ,
          We are eager to help u with your mental health and be with you throughout the process tomake your mental health better. 
          We are here to help you ,
          Thank you and stay connected .
        </p>
        <div className='mt-5'>
          <Social/>
        </div>
        </div>
       
    </section>
    <div className='bg-[#f5f5f5] w-full flex justify-center flex-col mt-10  h-40 items-center' >
        <p className='text-black font-Salsa'>
         FOUNDER OF THIS WEBSITE
        </p>
      </div>
<div className='flex flex-row justify-evenly mt-10'>
  <Card image={IMG1} title={"ISHA"} title1={"I am Isha  founder and developer of this website . I am final year Student of Bsc. Computer Application of Patna Women's College ."}/>
  <Card image={IMG2} title={"MANISHA KISPOTTA"} title1={"I am Manisha kispotta founder and developer of this website. I am final year student of Bsc. Computer Application of Patna Women's College"}/>
  <Card image={IMG3} title={"AKANKSHA"} title1={"I am Akanksha founder and developer of this website. I am final year student of Bsc. Computer Application of Patna Women's College"}/>
</div>
    </div>
  );
};

export default About;