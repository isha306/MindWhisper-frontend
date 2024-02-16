import React from 'react'
import "../pages/Signin.css"
import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Signin() {
    useEffect(()=>{
        window.scrollTo(0, 0);
       },[])
      const loginUrl = "http://localhost:3000/login";
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [message, setMessage] = useState()
      const [isloading, setIsLoading] = useState(false)
      const navigate = useNavigate()
    
    
      const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
    
    
        const body = {
          email: email,
          password: password
        }
    
        fetch(loginUrl, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" }
    
        }).then(response => response.json())
          .then((json) => {
            setMessage(json.message)
            if (json.isSuccess) {
              localStorage.setItem("token", json.token)
              navigate("/loginpage")
            }
          }).catch(error => {
            setMessage("internal error")
           
    
    
          }).finally(() => {
            setIsLoading(false)
          })
    
    
      }
      const registerUrl = "http://localhost:3000/register";
  const [name, setName] = useState("")
  const [phone, setPhone] = useState()
  

  const Register = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const body = {
      name: name,
      password: password,
      email,
      phone
    }
    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then((json) => {
        setMessage(json.message)

      }).catch(error => {
        setMessage("Internal Errorr")

      }).finally(() => {
        setIsLoading(false)
      })

  }
  return (
    <div className='mt-10'>
    <p className='text-black flex justify-center'>{message}</p>
    <div className='flex justify-evenly w-50 h-100'>
        
    <div class="main"> 
     	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="login">
				<form class="form">
               
					<label for="chk" aria-hidden="true">Login</label>
                    
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
					<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
				
					<button onClick={handleLogin} type='submit'>Login</button>
                    
                    
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='username' required />
					<input value={phone} onChange={(e) => setPhone(e.target.value)} type='number' placeholder='number' required />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='string' placeholder='email' required />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' required />
					<button onClick={Register}>Register</button>
				</form>
			</div>
	</div>
    </div>
    </div>
  )
}
