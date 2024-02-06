import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import "../pages/Chat.css"
export default function Chat() {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  const [message, setMessage] = useState()
  const [room, setRoom] = useState()
  const [messages, setMessages] = useState([])


  const [isJoined, setIsJoined] = useState(false)
  const socket = io("https://mentalhealthanalyzer-s6f6.onrender.com", { transports: ["websocket"] })
  useEffect(() => {
    socket.on("joined", () => {
      setIsJoined(true)
    })
    socket.on("message",(msg)=>{
      setMessages((prev)=>[...prev,msg])
    })
  }, [room])
  function send() {
    socket.emit("message", message, room)
  }

  function join() {
    socket.emit("join", room)
  }
  return (
    <div class="card">
    <div class="chat-header">Chat</div>
    <div class="chat-window">
    <ul class="message-list"></ul>
    <div class="chat-input">
      {
        !isJoined ? <div>
          <input value={room} onChange={(e) => setRoom(e.target.value)} type='text' placeholder='enter room id' />
          <button className="className='bg-white rounded-lg text-lg text-bold mt-4" onClick={join} type='submit' >Join</button>
        </div>
          :
          <div>
            {
              messages.map((mess, index) => {
                return (
                  <p key={index}>
                    {mess}
                  </p>
                )
              })
            }
            <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Enter Message' />
            <button  className="className='bg-white rounded-lg text-lg text-bold mt-4" onClick={send} type='submit'>Send</button>
          </div>
      }
      </div>
     </div>
    </div>
  )
}