
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const GoogleSuggestionList = [
    { id: 1, textdata: 'Search Google' },
    { id: 2, textdata: 'Price of Ethereum' },
    { id: 3, textdata: 'Oculus Quest 2 specs' },
    { id: 4, textdata: 'What is a snare Price' },
    { id: 5, textdata: 'Price of Ethereum today' },
    { id: 6, textdata: 'Latest trends in AI' },
    { id: 7, textdata: 'Latest trends in Music' }
];

const Google = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filterd, setfilterd] = useState(GoogleSuggestionList);

    const inputchange = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        const filteredlist = GoogleSuggestionList.filter(e =>
            e.textdata.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filteredlist)
        setfilterd(filteredlist);
    };

    const setvalinput = (ech) => {
        setSearchInput(ech);
    };

    return (
        <div className='flex justify-center items-center text-center'>
            <div >
                <img className='' src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                <FontAwesomeIcon icon="fa fa-arrow-up" />
                <input className='p-3 border-2'
                    type="text"
                    value={searchInput}
                    onChange={inputchange}
                    placeholder="Search Google"
                />
                <ul className="es-list">
                    {filterd.map(e => (
                        <li key={e.id} onClick={() => setvalinput(e.textdata)}>
                            <div><FontAwesomeIcon icon="fa fa-arrow-up" />
                                <button className='text-2xl'>
                                    {e.textdata}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        </div>
    );
}

export default Google;