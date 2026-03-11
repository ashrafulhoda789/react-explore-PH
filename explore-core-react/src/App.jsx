import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person () {
  const age = 17;
  const name = 'Jamshed';
  return (
    <p>I am a person: {name} {age}</p>
  )
}

function Sports () {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>AB</li>
        <li>Kholi</li>
        <li>Williamson</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
