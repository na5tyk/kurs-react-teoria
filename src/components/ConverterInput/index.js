import React from 'react'

const ConverterInput = (props) => {
    const updateValue = (event) => {
        props.setValue(event.target.value);
        props.setCurrency(props.placeholder);
    }

    return (
        <input text="text" placeholder={props.placeholder}  value={props.value} onChange={updateValue} />
    )
}

export default ConverterInput
