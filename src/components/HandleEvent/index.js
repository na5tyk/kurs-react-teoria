import React from 'react'

const HandleEvent = () => {
    const dogs = [
        { id: 1, name: 'Azor'},
        { id: 2, name: 'Burek'},
        { id: 3, name: 'Reksio'}
    ]
    
    const onSubmit = (e, id) => {
        console.log(id)
        const dogName = dogs.find(dog => dog.id === id);
        console.log('dogName', dogName.name)
    }
    return (
        dogs.map(dog => <button onClick={(e) => onSubmit(e, dog.id)}>{dog.name}</button>)
    )
}

export default HandleEvent
