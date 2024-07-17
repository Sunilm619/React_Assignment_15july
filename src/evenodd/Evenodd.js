import React, { useState } from 'react'
import './index.css'
function Evenodd() {
    const [num, setNum] = useState(0)
    const [sta, setSta] = useState(true)

    const ran = () => {
        let ranNum = Math.ceil(Math.random() * 100)
        setNum(ranNum)
        if (ranNum % 2 !== 0) {
            setSta(false)
        }
        else {
            setSta(true)
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg'>
            <div>
                <h1>Count {num}</h1>
                <p>count is {sta ? "Even" : "Odd"}</p>
                <button className='bg-blue-400 p-2 rounded-xl' onClick={ran}>Increment</button>
            </div >
        </div>
    )
}

export default Evenodd