import React, { useState } from 'react';
import LangSwitcher from './components/LangSwitcher';
import Message from './components/Message';
import LangContext from './context/langContext';

function App() {
  const [lang, setLang] = useState('pl');

  return (
    <LangContext.Provider value={{
      lang,
      toggleLang: setLang
    }}>
      <LangSwitcher />
      <Message />
    </LangContext.Provider>
  );
}

export default App;
