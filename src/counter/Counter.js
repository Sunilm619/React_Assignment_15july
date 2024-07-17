import React, { useState } from 'react'
import './counter.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Counter() {
    const [countr, setCountr] = useState(0)
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className='pt-5'>The Button has been clicked <span style={{ color: "pink" }}>{countr}</span> times</h1>
            <p>Click the Button to Increase</p>
            <button className="btn btn-primary" onClick={() => setCountr(countr + 1)}>Click Me</button>
        </div>
    )
}

export default Counter