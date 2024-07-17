import React, { useState } from 'react'
import './index.css'
function Randomnumber() {
    const [st, setSt] = useState(0)
    return (
        <div className='bg flex items-center justify-center'>
            <div className='w-6/12 h-3/6 bg-slate-50 text-center pt-12' >
                <h1 className='font-extrabold text-3xl text-sky-400'> Random Number Generator</h1 >
                <p>A random number between 0 and 100</p>
                <button className='bg-blue-500 my-4 p-2 rounded-lg text-zinc-200' onClick={() => { setSt(Math.floor(Math.random() * 100)) }}>Generate</button>
                <h2 className='text-4xl'>{st}</h2>
            </div >
        </div >
    )
}

export default Randomnumber