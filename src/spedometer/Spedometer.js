import React, { useState } from 'react'
import './Spedometer.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Spedometer() {
    const [num, setNum] = useState(0)
    return (
        <div className='bg'>
            <h1 style={{ paddingTop: "200px" }}>Spedometer</h1>
            <h3 className='my-3'>Speed is {num}mph</h3>
            <p>Min limit is 0mph, Max limit is 200mph</p>
            <button className='btn btn-primary' onClick={() => {
                if (num < 200) {
                    setNum(num + 10)
                }
            }}>Accelerate</button>
            <button className='btn btn-danger mx-3' onClick={() => {
                if (num > 0) {
                    setNum(num - 10)
                }
            }}>Decelerate</button>
        </div>
    )
}

export default Spedometer