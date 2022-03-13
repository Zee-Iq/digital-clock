 import './App.css';
import { useState } from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(time)

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time)
  } 
  
  return (
    <>
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Click me to get current time</button>
    </>
  )
}

export default App;
