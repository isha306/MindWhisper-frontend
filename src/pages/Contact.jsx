import React, { useEffect } from 'react'
import { Button } from "@mantine/core";
import Social from '../Component/Social';



function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div className='flex justify-center h-[80vh] '>
      <form class="w-full max-w-lg pt-10 ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
              Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3
       px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
       focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe@gmail.com" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              intrest
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
       rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"
              type="text" placeholder="Query" />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Phone number
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
       focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="9021088865" />
          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
              message
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
       leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"
              placeholder="Message" />
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
       
      <div className='flex justify-center mt-10'>
      <button className=' rounded-full  mt-auto flex flex-col   items-center flex justify-center  cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
    border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] ' onClick={Contact}>Submit</button>

      </div>
      <div className='mt-5'>
          <Social/>
        </div>
      </form>
    </div>
  )
}
export default Contact