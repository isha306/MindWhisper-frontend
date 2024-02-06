import React from 'react'
import Slider from '../Component/Slider'
import { Button } from '@mantine/core'
import Offer from '../Component/Offer'
import Banner from '../Component/Banner'
import Subscribe from '../Component/Subscribe'
import { Link } from 'react-router-dom'
import Disorder from "../Component/Disorder"
import Video from '../Component/Video'
import Social from '../Component/Social'



export default function
  () {
    
  return (
    <div className="flex items-center flex-col " >
      <div className='max-w-[100vw] ' >
        <Slider />
      </div>
      <div className='bg-[#f5f5f5] w-full flex justify-center flex-col mt-10  h-40 items-center' >
        <p className='text-black font-Salsa'>
          YOUR MENTAL HEALTH DOES NOT DEFINE YOU
        </p>
        <Button
          variant="gradient"
          gradient={{ from: 'rgba(171, 159, 159, 1)', to: 'rgba(140, 191, 191, 1)', deg: 0 }} >
          <Link to={"/login"}> Login Now</Link>
        </Button>
      </div>


      <div className='flex flex-row '>
        <Disorder />

      </div>
      <div class="row">
        <div class="col" >
          <div class="wrap">
            <p className='text-black font-Salsa text-[30px] mt-10 text-center'>
              Happiness
            </p>
            <h1 className=' flex text-center font-lemon text-gray-400 flex-col '>
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
      <div className='mt-20'>
        <Offer />
      </div>
      <div>
        <Banner />
      </div>
      <div className='w-full '>
        <div className='bg-[#f5f5f5] w-full flex justify-center flex-col mt-10  h-48 items-center' >
          <p className='text-black font-Salsa'>
           Thank You For Visting Us
          </p>
          <div className='mt-5'>
          <Button
            variant="gradient"
            gradient={{ from: 'rgba(171, 159, 159, 1)', to: 'rgba(140, 191, 191, 1)', deg: 0 }} >
            <Link to={"/contact"}> Contact Us</Link>
          </Button>
          </div>
          <div className='mt-5'>
          <Social/>
        </div>
        </div>
        
      </div>
    </div>

  )
}
