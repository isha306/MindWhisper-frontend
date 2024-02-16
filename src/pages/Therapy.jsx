import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'
import { useEffect } from 'react'

export default function Therapy() {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div className="flex items-center flex-col">
  

  
              <div class="wrap">
            <p className='text-[#caa887]  text-[30px] mt-10 text-center font-Salsa'>
           Therapy
                </p> 
                <h1 className=' text-[#caa887] flex text-center font-Salsa text-[20px] flex-col '>
                “ONE OF THE BEST MEANTAL HEALTH TIPS YOU'LL EVER HEAR IS THAT ”
                    </h1>
                    <h1 className=' flex text-center   font-semibold flex-col '>
                “IF YOU FEEL LIKE YOU HATE EVERYONE--EAT”
                    </h1>
                    <h1 className=' flex text-center  font-semibold flex-col '>
                “IF YOU FEEL EVERYONE HATES YOU --SLEEP”
                    </h1>
                    <h1 className=' flex text-center font-semibold  flex-col '>
                “IF YOU FFEL LIKE YOU HATE YOURSELF --SHOWER”
                    </h1>
                    <h1 className=' flex text-center font-semibold flex-col '>
                “IF YOU FEEL OVERWHELMED BY YOUR THOUGHTS --WRITE”
                    </h1>
                    <h1 className=' flex text-center font-semibold flex-col '>
                “IF YOU FEEL STUCK IN THE PAST ---PLAN FOR THE FUTURE”
                    </h1>
                    <h1 className=' flex text-center font-semibold flex-col '>
                “IF YOU FEEL ANXIOUS ABOUT THE FUTURE --FOCUS ON THE PRESENT”
                    </h1>
                    <h1 className=' flex text-center font-semibold flex-col '>
                “IF YOU FEEL RESTLESS --TAKE A LONG WOLK”
                    </h1>
                    <h1 className=' flex text-center font-semibold flex-col '>
                “IF YOU FEEL LIKE GIVING UP --REMEMBER A TIME YOU SUCCEEDED”
                    </h1>
            </div>
              <div className=' flex flex-row mt-2 '>
           
              <div className=' flex flex-col justify-center mt-10 mr-6 rounded-lg mx-auto self-center align-middle h-96 w-80  bg-[#efdecd]'>
            <img src="src/assets/yoga.jpg"  className='h-60 w-full items-center mt-4  '/>
            <p className=' rounded-2xl text-center mt-2 mb-0'> "Yoga means addition – addition of energy, strength and beauty to body, mind and soul.” </p>
            <Button    variant="gradient"
          gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }}className=' mt-0 mb-4'><Link to={"/yoga"}>Yoga</Link></Button>
            </div>
            <div className=' flex flex-col justify-center mt-10 mr-6 rounded-lg mx-auto self-center align-middle h-96 w-80 bg-[#efdecd]'>
            <img src="src/assets/book.jpg"  className='h-60 w-full mt-4 items-center'/>
            <p className=' rounded-2xl text-center mt-2 mb-0'>“A reader lives a thousand lives before he dies... The man who never reads lives only one.”</p>
            <Button   variant="gradient"
          gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }} className=' mt-3 mb-4'><Link to={"/book"}>Book</Link></Button>
            </div>

            <div className='flex flex-col justify-center mt-10 mr-6 rounded-lg mx-auto self-center align-middle h-96 w-80 bg-[#efdecd]'>
            <img src="src/assets/music.jpg"  className='h-60 w-full mt-4 items-center'/>
            <p className=' rounded-2xl text-center mt-2 mb-0'>“Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.”</p>
            <Button   variant="gradient"
          gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }} className=' mt-3 mb-4'><Link to={"/music"}>Music</Link></Button>
            </div>
           
       </div> 
    </div>
  )
}