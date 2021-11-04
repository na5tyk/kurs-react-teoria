import React, { useContext } from 'react'
import LangContext from '../../context/langContext'
import { messages } from '../../utils/messages'

const Message = () => {
    const { lang } = useContext(LangContext);

    return (
        <p>{messages[lang].hello}</p>
    )
}

export default Message
