import React, { useState } from 'react'
import { useEffect } from 'react';

import './style.css'

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [clicked, setClicked] = useState(false);

    const changeTime = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(changeTime, 1000);

        return () => {
            clearInterval(timerID)
        }
    }, [])

    useEffect(() => {
        console.log('HUTRRRA')
    }, [clicked])

    console.log(date);
    console.log(clicked)

    return (
        <div className="clock">
            {date.toLocaleTimeString()}        
            <button onClick={() => setClicked(true)}>Zmien</button>
        </div>
    )
}

export default Clock
