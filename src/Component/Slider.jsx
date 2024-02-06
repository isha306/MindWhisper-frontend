import React from 'react'

function Slider() {
  return (
    <div id="parent" className='flex flex-row'>
      <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
        <p className='flex text-center flex-col text-black font-Salsa'>
        “You don’t have to be positive all the time. It’s perfectly okay to feel sad,</p>

        <p className='flex text-center flex-col text-black font-Salsa'> 
        angry, annoyed, frustrated, scared, and anxious. Having feelings
        </p>
        <p className='flex text-center flex-col text-black font-Salsa'> 
        doesn’t make you a negative person. It makes you human.” — Lori Deschene
        </p>
      </div>
      <div class="row">

        <img src="https://images.vexels.com/media/users/3/245939/isolated/preview/3e11534df8aea1781546e6271b0f5227-mental-health-important-badge.png" alt="" />

      </div>
    </div>
  )
}

export default Slider