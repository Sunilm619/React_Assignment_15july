import React, { useState } from 'react'
import './indexx.css'
function Letters() {
    const [st, setSt] = useState(0)
    return (
        <div className='bg flex items-center'>
            <div className='p-6'>
                <h1>Calculate the Letters you Enter</h1>
                <p className="my-6">Enter Phrase</p>
                <input onChange={(e) => { setSt(e.target.value.length) }} type="text" placeholder='Enter Phrase' className='rounded-sm border-2' />
                <br />
                <button className='bg-green-500 p-3 mt-3 '>No.of Letters:{st}</button>
            </div>
        </div >
    )
}

export default Letters