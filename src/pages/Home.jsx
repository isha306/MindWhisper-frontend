import React from 'react'
import Slider from '../Component/Slider'
import { Button } from '@mantine/core'
import Offer from '../Component/Offer'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom'
import Disorder from "../Component/Disorder"
import Video from '../Component/Video'
import Therapy from '../Component/Therapy'



export default function
  () {
    
  return (
    <div className="flex items-center flex-col " >
      <div className='max-w-[100vw] ' >
        <Slider />
      </div>
      <div className='bg-[#efdecd] w-full flex justify-center flex-col mt-10  h-40 items-center' >
        <p className='text-black font-Salsa'>
          YOUR MENTAL HEALTH DOES NOT DEFINE YOU
        </p>
        <Button
          variant="gradient"
          gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }} >
          <Link to={"/signin"}> Login Now</Link>
        </Button>
      </div>
      <div className='bg-white w-full flex justify-center flex-col   h-40 items-center' >
      <h1 data-aos="fade-up" className="text-3xl text-[#caa887] font-Salsa">
            Types of Mental Health Disorder
            </h1>
            <p data-aos="fade-up" className="text-xs text-primary  text-[#6e5945]">
              what mental health needs is more sunlight ,more candor , and more unshamed conversation
            </p>
      </div>
      
      <div className='flex flex-row '>
        
        <Disorder />

      </div>
      <Therapy/>
     
      <div>
        <Offer />
      </div>
      <div class="row">
        <div class="col" >
          <div class="wrap">
            <p className='text-[#caa887] font-Salsa text-[30px]  text-center'>
              Happiness
            </p>
            <h1 className=' flex text-center font-lemon text-[#886b4d] flex-col '>
              “Depends Upon Ourselves”
            </h1>
          </div>
        </div>
      </div>

      <div className=' flex flex-row mt-10 max-w-[150vh] '>
        <div className='col-6 flex-col flex'>
          <Video />
        </div>
        <div className='col-6 flex-col flex text-center mt-11'>
          <p>“The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly,
            and take care that you entertain no notions unsuitable to virtue and reasonable nature.” - Marcus Aurelius</p>
        </div>
      </div>
  
      <div>
        <Banner />
      </div>
      <div className='w-full '>
        <div className='bg-[#efdecd] w-full flex justify-center flex-col mt-10  h-40 items-center' >
          <p className='text-black font-Salsa'>
           Thank You For Visting Us
          </p>
          <div className='mt-5'>
          <Button
              variant="gradient"
              gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }} >
            <Link to={"/contact"}> Contact Us</Link>
          </Button>
          </div>
         
        </div>
        
      </div>
    </div>

  )
}
