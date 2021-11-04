import React, { useContext } from 'react'
import LangContext from '../../context/langContext';

const LangSwitcher = () => {
    const context = useContext(LangContext);
    
    console.log(context);

    const changeLang = (event) => {
        context.toggleLang(event.target.value);
    };
    
    return (
        <select onChange={changeLang}>
            <option value={'pl'}>polski</option>
            <option value={'en'}>angielski</option>
        </select>
    )
}

export default LangSwitcher
