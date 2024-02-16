import React from "react"
import { useEffect } from "react";

const Books = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
 return (
<div className="flex items-center flex-col">
  <div className="bg-[#cd9575] w-80 rounded-2xl flex justify-center flex-col mt-5 h-20 items-center 
             shadow-black shadow-[5px_5px_opx_black] ">
    <p className="text-black text-[30px]">Book</p>
  </div>
  <div class="wrap">
            <p className='text-black text-[30px] mt-10 text-center'>
                “Books are important for the mind, heart, and soul.”
                </p> 
                <h1 className=' flex text-center  flex-col '>
            We read to know we are not alone.
                    </h1>
            </div>
            <div className=' flex flex-col justify-center mt-2 rounded-lg mx-auto self-center align-middle h-[70vh] w-[50vw]'>
            <img src="src/assets/reading.jpg"  className='h-full w-full items-center mt-4  '/>
           </div>
           <div class="wrap">
            <p className='text-black text-[20px] mt-10 text-center'>
            "As you read a book word by word and page by page,
             you participate in its creation, just as a cellist playing a Bach 
             suite participates, note by note, in the creation, the coming-to-be, 
             the existence, of the music. And, as you read and re-read, the book of 
             course participates in the creation of you, your thoughts and feelings, 
             the size and temper of your soul." – Ursula K. Le Guin
                </p> 
                <h1 className=' flex text-center mt-2 flex-col '>
                "Books and doors are the same thing. You open them, and you go through into another world."
                    </h1>
            </div>
  <div className="flex flex-row mt-10  ">
  <div className=" bg-[#efdecd] flex flex-row rounded-xl">
     <img src="src/assets/mythof normal.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-center'>
            The Myth of Normal: Trauma, Illness, and Healing in a Toxic 
                </p>
                <p className='text-black text-[20px]  text-left'>
                Culture
                </p> 
                <h1 className=' flex text-left mt-6 flex-col '>
                Gabor Maté,Daniel Maté
                    </h1>
            </div>
        </div>
  </div>
</div>
<div className="flex flex-row mt-10  ">
  <div className=" bg-[#efdecd]  flex flex-row rounded-xl">
     <img src="src/assets/dislike.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black text-[20px] mt-10 text-left'>
            The Courage to Be Disliked
                </p> 
                <h1 className=' flex text-left flex-col mt-6 '>
                The Japanese Phenomenon That Shows You How to Change Your Life and
                    </h1>
                    <h1 className=' flex text-left flex-col '>
                    Achieve Real Happiness
                    </h1>
                    <h1 className=' flex text-left flex-col '>
                    By Ichiro Kishimi and Fumitake Koga
                    </h1>
            </div>
        </div>
  </div>
</div>
<div class="wrap">
            <p className='text-black text-[30px] mt-10 text-center'>
                “A room without books is like a body without a soul.”
                </p> 
                <h1 className=' flex text-center  flex-col '>
                Books may well be the only true magic.
                    </h1>
            </div>
<div className=' flex flex-col justify-center mt-2 rounded-lg mx-auto self-center align-middle h-[70vh] w-[50vw]'>
            <img src="src/assets/reading 2.jpg"  className='h-full w-full items-center mt-4  '/>
           </div>
           <div class="wrap">
            <p className='text-black text-[20px] mt-10 text-center'>
            "It is really hard to be lonely very long in a world of words. Even if you don't have 
            friends somewhere, you still have language, and it will find you and wrap its little 
            syllables around you and suddenly there will be a story to live in." – Naomi Shihab Nye,
             I'll Ask You Three Times, Are You OK?: Tales of Driving and Being Driven
                </p> 
                <h1 className=' flex text-center mt-2 flex-col '>
                "Once you learn to read, you will be forever free."
                    </h1>
            </div>
<div className="flex flex-row mt-10  ">
  <div className="bg-[#efdecd] flex flex-row rounded-xl">
     <img src="src/assets/lighter.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            Lighter : Let Go of the Past , Connect with the Present , and
                </p> 
                <h1 className=' flex text-left flex-col text-[20px]'>
                Expand The Future
                    </h1>
                    <h1 className=' flex text-left my-4 flex-col '>
                    by Yung Pueblo
                    </h1>
            </div>
        </div>
  </div>
</div>
<div className="flex flex-row mt-10  ">
  <div className=" bg-[#efdecd]  flex flex-row rounded-xl">
     <img src="src/assets/body.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            The Body Keeps the Score : Brain, Mind, and Body in the   
                </p> 
                <h1 className=' text-black  text-[20px] text-left '>
                Healing of Trauma
                    </h1>
                    <h1 className=' flex text-left my-4 flex-col '>
                    by Bessel van der Kolk
                    </h1>
            </div>
        </div>
  </div>
</div>
<div class="wrap">
            <p className='text-black text-[30px] mt-10 text-center'>
            "Reading is an active, imaginative act; it takes work."
                </p> 
                <h1 className=' flex text-center  flex-col '>
                A book is a gift you can open again and again.
                    </h1>
            </div>
<div className=' flex flex-col justify-center mt-2 rounded-lg mx-auto self-center align-middle h-[70vh] w-[50vw]'>
            <img src="src/assets/reading 3.jpg"  className='h-full w-full items-center mt-4  '/>
           </div>
           <div class="wrap">
            <p className='text-black text-[20px] mt-10 text-center'>
            "A book lying idle on a shelf is wasted ammunition. Like money, books must be kept in
             constant circulation... A book is not only a friend, it makes friends for you.
              When you have possessed a book with mind and spirit, you are enriched. But when you pass 
              it on, you are enriched threefold." – Henry Miller, The Books in My Life
                </p> 
                <h1 className=' flex text-center mt-2 flex-col '>
                "Reading is important. If you know how to read, then the whole world opens up to you."
                    </h1>
            </div>
<div className="flex flex-row mt-10  ">
  <div className="bg-[#efdecd] flex flex-row rounded-xl">
     <img src="src/assets/highly.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            The Highly Sensitive Person: How to Thrive when the World 
                </p> 
                <h1 className=' flex text-left flex-col text-[20px]'>
                Overwhelms You
                    </h1>
                    <h1 className=' flex text-left my-4 flex-col '>
                    by Elaine N. Aron Ph.D. 
                    </h1>
            </div>
        </div>
  </div>
</div>
<div className="flex flex-row mt-10  ">
  <div className=" bg-[#efdecd]  flex flex-row rounded-xl">
     <img src="src/assets/Julia.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            This Too Shall Pass: Stories of Change, Crisis and Hopeful 
                </p>
                <h1 className=' flex text-left flex-col text-[20px]'>
                Beginnings
                    </h1>
                    <h1 className=' flex text-left my-4 flex-col '>
                    by Julia Samuel  
                    </h1>
            </div>
        </div>
  </div>
</div><div class="wrap">
            <p className='text-black text-[30px] mt-10 text-center'>
            "The best books... are those that tell you what you know already."
                </p> 
                <h1 className=' flex text-center  flex-col '>
                I don't read a book; I hold a conversation with the author.
                    </h1>
            </div>
<div className=' flex flex-col justify-center mt-2 rounded-lg mx-auto self-center align-middle h-[70vh] w-[50vw]'>
            <img src="src/assets/reading 4.jpg"  className='h-full w-full items-center mt-4  '/>
           </div>
           <div class="wrap">
            <p className='text-black text-[20px] mt-10 text-center'>
            "The best moments in reading are when you come across something–a thought, a
             feeling, a way of looking at things–which you had thought special and particular to 
             you. Now here it is, set down by someone else, a person you have never met, 
             someone even who is long dead. And it is as if a hand has come out and taken yours.
             " – Alan Bennett, The History Boys
                </p> 
                <h1 className=' flex text-center mt-2 flex-col '>
                "Reading is essential for those who seek to rise about the ordinary."
                    </h1>
            </div>
<div className="flex flex-row mt-10  ">
  <div className="bg-[#efdecd] flex flex-row rounded-xl">
     <img src="src/assets/alone.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            The Art of Being ALONE: Solitude Is My HOME, Loneliness Was My Cage
                </p> 
                <h1 className=' flex text-left flex-col text-[20px]'>
                Expand The Future
                    </h1>
                    <h1 className=' flex text-left my-4 flex-col '>
                    by Renuka Gavrani
                    </h1>
            </div>
        </div>
  </div>
</div>
<div className="flex flex-row mt-10  ">
  <div className=" bg-[#efdecd]  flex flex-row rounded-xl">
     <img src="src/assets/brain.jpg"  className='h-60 w-60 mr-6 rounded-xl'/>
     <div class="col" >
            <div class="wrap">
            <p className='text-black  text-[20px] mt-10 text-left'>
            Brain Energy: A Revolutionary Breakthrough in Understanding Mental</p> 
                <h1 className=' flex text-left flex-col mt-4'>
                Health and Improving Treatment for Anxiety, Depression, OCD, PTSD, and More
                    </h1>
                    <h1 className=' flex text-left flex-col '>
                    By Ichiro Kishimi and Fumitake Koga
                    </h1>
            </div>
        </div>
  </div>
</div>

</div>
 );
};
export default Books;