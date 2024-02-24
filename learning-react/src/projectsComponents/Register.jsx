import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone:"",
        password: "",
        confirmPassword: ""
    })

    const handleSignup = async () => {
        let res = await fetch("http://localhost:5000/signup", {
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
        alert(res.message);
    }

    return (

        <div className='border-black border-2 w-[350px] m-10 p-5 '>
            <label htmlFor="">First-Name:</label>
            <input value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="text" placeholder='Enter your Name' name="" id="" />
            <br />
            <br />
            <label htmlFor="">Last-Name:</label>
            <input value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="text" placeholder='Last-Name' name="" id="" />
            <br />
            <br />
            <label htmlFor="">Email:</label>
            <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="text" placeholder='Enter email' name="" id="" />
            <br />
            <br />
            <label htmlFor="">phone:</label>
            <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="number" placeholder='Enter phoneNumber' name="" id="" />
            <br />
            <br />
            <label htmlFor="">Crt-Pass:</label>
            <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className=' p-3 rounded-lg border-black border-2' type="password" placeholder='Enter password' name="" id="" />
            <br />
            <br />

            <label htmlFor="">Cnfrm-Pass:</label>
            <input onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} value={data.confirmPassword} className=' p-3 rounded-lg border-black border-2' type="password" placeholder='Enter password again' name="" id="" />
            <br />
            <br />

            <p><Link to='/login'> Already have an Account? Login</Link></p>

            <button onClick={handleSignup} className="p-3 w-[200px] rounded-md bg-green-500">
                Register
            </button>
        </div>

    )
}

export default Register