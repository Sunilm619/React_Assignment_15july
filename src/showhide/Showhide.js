import React, { useState } from 'react';
import './index.css';

function Showhide() {
    const [showFirstName, setShowFirstName] = useState(false);
    const [showLastName, setShowLastName] = useState(false);

    return (
        <div className='flex justify-center items-center bg '>
            <div>
                <h1 className='text-center text-2xl mb-4'>Show/Hide</h1>
                <div className='flex justify-between'>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded'
                        onClick={() => setShowFirstName(!showFirstName)}
                    >
                        {showFirstName ? 'Hide' : 'Show'} FirstName
                    </button>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded ml-4'
                        onClick={() => setShowLastName(!showLastName)}
                    >
                        {showLastName ? 'Hide' : 'Show'} LastName
                    </button>
                </div>
                {showFirstName && <p className='text-center mt-4'>Sunil</p>}
                {showLastName && <p className='text-center mt-4'>Manga</p>}
            </div>
        </div>
    );
}

export default Showhide;
