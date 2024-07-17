import React, { useState } from 'react';

const CashWithdrawal = () => {
    const [balance, setBalance] = useState(2000);
    const denominationsList = [
        { id: 1, value: 50 },
        { id: 2, value: 200 },
        { id: 3, value: 100 },
        { id: 4, value: 500 }
    ];

    const handleWithdrawal = (amount) => {
        setBalance(balance - amount);
    };

    return (
        <div className="withdrawal text-center text-2xl pt-32">
            <h2>Sarah Williams</h2>
            <h3>Your Balance</h3>
            <p ><span className='text-2xl text-green-500'>{balance}</span> In Rupees</p>
            <h3 className='my-4'>Withdraw</h3>
            <div className="buttons">
                {denominationsList.map(e => (
                    <button className='bg-gray-600 text-yellow-500 p-4 mx-3' key={e.id} onClick={() => handleWithdrawal(e.value)}>
                        {e.value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CashWithdrawal;