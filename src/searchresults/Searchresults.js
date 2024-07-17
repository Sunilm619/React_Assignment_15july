import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import DestinationsList from '../destinationsList/DestinationsList';

function Searchresults(props) {
    const { destinationsList } = props
    const [lis, setLis] = useState(destinationsList)
    const searchdat = (e) => {
        const searchvalue = e.target.value;
        const filterdlis = lis.filter(e => (e.name.toLowerCase().includes(searchvalue.toLowerCase())))
        console.log(filterdlis)
        setLis(filterdlis)
        if (searchvalue === "") {
            setLis(destinationsList)

        }
    }
    return (

        <div>
            <div className='text-center'>
                <h1>Destination Search</h1>
                <input onChange={searchdat} placeholder='search' className='bg-gray-300' type="search" />
            </div>

            <div className='container'>
                <div className='row'>
                    {lis.map(e => (<div className='col-6 flex justify-center'>
                        <div className='w-[50%]' key={e.id} >

                            <p>{e.name}</p>
                            <img alt='img' className='w-7/12 h-4/6' src={e.imgUrl} />
                        </div></div>))}

                </div>

            </div>


        </div >
    );
}

export default Searchresults;
