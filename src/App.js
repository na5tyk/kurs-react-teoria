import React, { useState } from 'react';
import ConverterInput from './components/ConverterInput';

function App() {
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState();

  const valuePLN = currency === 'PLN' ? value : (value * 4.62).toFixed(2);
  const valueEUR = currency === 'EUR' ? value : (value / 4.62).toFixed(2);

  return (
    <div>
      <ConverterInput placeholder="PLN" value={valuePLN} setValue={setValue} currency={currency} setCurrency={setCurrency} />
      <ConverterInput placeholder="EUR" value={valueEUR} setValue={setValue} currency={currency} setCurrency={setCurrency} />
    </div>
  );
}

export default App;
