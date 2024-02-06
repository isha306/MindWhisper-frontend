import React from 'react'
import Video1 from "../assets/Video1.mp4"


function Video() {
  return (
    <div className='Video'>
       
<div>
  <video src= {Video1} autoPlay muted loop className='max-h-[130vh] '/>
</div>

</div>
    
  )
}

export default Video