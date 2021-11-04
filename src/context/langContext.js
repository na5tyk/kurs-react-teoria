import React from 'react';

const LangContext = React.createContext({
    lang: 'pl',
    toggleLang: () => {}
});

export default LangContext;