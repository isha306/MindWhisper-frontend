import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Login() {
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
  return (
 
    <div className='flex flex-row justify-center mt-10 rounded-lg mx-auto self-center align-middle h-96 w-80
      bg-gray-400 backdrop-blur-sm bg-opacity-30'>

<form action=''>
        <p className='text-3xl mt-6'>Login</p>
        <div className='user-box mt-8'>
          <p>{message}</p>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='username' required />


        </div>
        <div className='input-box mt-4'>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />

        </div>
        <div className='remember-forgot mt-10'>
          <label><input type='checkbox' /></label>
          <a href='#'>forgot password</a> </div>
       
        <button className='bg-black text-white rounded-lg text-lg text-bold mt-4' onClick={handleLogin} type='submit'>LOGIN</button>
        <div>
          <span>new here
            <Link to="/register">
              <p>create account</p></Link>
          </span>
        </div>


      </form>
     
    </div>


  )
}
