import React from 'react';
import './App.css';

function App() {
  const dogName = 'Burek';
  const paragraf = <p>Pies wabi się {dogName}</p>;

  const isDog = true;

  const element = <h1 className="greeting">Hello world</h1>;
  const element2 = React.createElement('h1', { className: 'greeting'}, 'Hello world')
  return (
    <div>
      {element}
      {element2}
      {paragraf}
      {2+2}
      {dogName.toUpperCase()}
      {isDog ? <p>Tak, to jest</p> : <p>Nie, nie jes to pies</p>}
    </div>
  );
}

export default App;
