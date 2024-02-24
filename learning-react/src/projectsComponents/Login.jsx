import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [data, setData] = useState({
    phone: "",
    password: "",
  })

  const [result, setResult] = useState('')


  const handleLogin = async () => {
    let res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: data.phone,
        password: data.password,
      })
    })

    res = await res.json();
    console.log(res);
    setResult(res.message);
  }


  return (

    <div className='border-black border-2 w-[300px] m-10 p-5 '>
      <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="number" placeholder='Enter phone' name="" id="" />
      <br />
      <br />
      <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="password" placeholder='Enter password' name="" id="" />
      <br />
      <br />
      <p><Link to='/'>Account not created? Register</Link></p>

      <button onClick={handleLogin} className="p-3 w-[200px] rounded-md bg-green-500">
        SUBMIT
      </button>

      {
        result && (
          <p>{result}</p>
        )
      }
    </div>

  )
}

export default Login