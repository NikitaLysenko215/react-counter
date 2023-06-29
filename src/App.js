import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
 
 const [count, setCount] = React.useState(0)

 const onClickPlus = () => {
  setCount(count + 1);
 }

 const onClickMinus = () => {
  setCount(count - 1);
 }

  return (
    <div className="App">

      <header className="App-header">
        <div>
          <h1>Счётчик</h1>
          <h1>{count}</h1>
          <button onClick={onClickMinus} className="minus">Минус</button>
          <button onClick={onClickPlus} className="plus">Плюс</button>
        </div>
      </header>
    </div>
  );
}

export default App;
