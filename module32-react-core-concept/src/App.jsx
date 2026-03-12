import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  const handleClick3 = ()=>{
    alert("Clicked 3");
  }

  const handleAdd = (num)=>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={
        function handleClick2(){
          alert("Clicked 2");
        }
      }>Click Me2</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={()=>{
        alert("Click 4")
      }}>Click me 4</button>

      <button onClick={()=> handleAdd(5)}>Click 5</button>
      
    </>
  )
}

export default App
