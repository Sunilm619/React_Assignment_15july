import React, { useState } from 'react'

function Subscribe() {
    const [sub, setSub] = useState('Subscribe')
    const chng = () => {
        setSub(!sub)
    }
    return (
        <div className='bg-black h-screen text-gray-200 flex flex-col justify-center items-center'>
            <h1 className='text-yellow-600 font-extrabold text-6xl'>Welcome</h1>
            <h1 className='my-5'>Thnak you Happy Learning</h1>
            <button className='bg-slate-300 text-stone-500' onClick={chng}>{sub ? 'Subscribe' : 'Subscribed'}</button>
        </div>
    )
}

export default Subscribe