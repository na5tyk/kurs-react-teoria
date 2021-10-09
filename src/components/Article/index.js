import { useState } from "react";

const Article = (props) => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(100);
    const [user, setUser] = useState({
        name: 'Patryk',
        email: 'patrykluba97@gmail.com'
    })

    const addCounter = () => {
        setCounter(prevValue => prevValue + 1);
    }

    const addTimer = () => {
        setTimer(prevValue => prevValue + 100);
    }

    console.log(user)

    const changeName = () => {
        setUser(prevValue => ({
            ...prevValue,
            name: 'Adam'
        }))
    }

    return <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{counter}</p>
        <p>{timer}</p>
        <button onClick={addCounter}>Dodaj</button>
        <button onClick={addTimer}>Dodaj timer</button>
        <button onClick={changeName}>Zmień imie</button>
    </div>
}

export default Article;
