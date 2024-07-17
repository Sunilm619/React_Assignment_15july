import React, { useState } from 'react'
import './index.css'
function Login() {
    const [st, setSt] = useState(false)
    const [bt, setBt] = useState(false)

    return (
        <div className='bgx flex justify-center items-center'>
            <div>
                <h1>{st ? "Welcome User" : "Please Login"}</h1>
                <button className='bg-slate-100 p-3 rounded-lg' onClick={() => {
                    return (setBt(!bt), setSt(!st))
                }}>{bt ? "Logout" : "Login"}</button>
            </div>
        </div >
    )
}

export default Login