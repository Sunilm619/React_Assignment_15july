import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const initialTodosList = [{ id: 1, title: 'Book the Ticket for Today' },
{ id: 2, title: 'Rent the movie tomorrow ' },
{ id: 3, title: 'Confirm the slot for the yoga session tomorrow morning' },
{ id: 4, title: 'Confirm my slot for Saturday Night' },
{ id: 5, title: 'confriim bolmojkat' },
{ id: 6, title: 'Order fruits on Big Basket ' },
{ id: 7, title: 'fix porenk issues' },
{ id: 8, title: 'Clear billa' }
];

function Simpletods() {
    const [data, setData] = useState(initialTodosList)
    const filter = (props) => {
        const filterdatalist = data.filter(e => e.id !== props)
        setData(filterdatalist)
    }
    return (
        <div>
            <h1 className='text-center mb-3'>Simple Tods</h1>
            {data.map(e => <li className='flex justify-between mx-60 mb-3' key={e.id}>
                <h3>{e.title}</h3>
                <button onClick={() => { filter(e.id) }} className='bg bg-danger p-2'>Delete</button>
            </li>)}
        </div >
    )
}

export default Simpletods