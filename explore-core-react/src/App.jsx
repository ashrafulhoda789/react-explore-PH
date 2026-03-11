import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concept</h1>
      <Student></Student>
      <Person></Person>
      <Developer name="Jamshed" tech="JS"></Developer>
      <Developer name="Mumir" tech="Python"></Developer>
      <Device name="Desktop" model="Customize" price="55,000"></Device>
      <Device name="Mobile" model="Xiaomi" price="30,000"></Device>
      <Device name="Monitor" model="Walton" price="14,000"></Device>
    </>
  )
}

function Device(props){
  return(
    <div style={{
      border : '2px solid purple',
      borderRadius : '20px',
      marginTop : '10px',
    }}>
      <h3>Device: {props.name}</h3>
      <h4>Model: {props.model} </h4>
      <p>Price: {props.price} </p>

    </div>
  )
}

function Student(){
  
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Developer(props){
  console.log(props);
  
  return(
    <div style={{
      border : '2px solid green',
      borderRadius : '20px',
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Person () {
  const age = 17;
  const name = 'Jamshed';

  const personStyle = {
    color : 'red',
    textAlign : 'left',
    
  }
  return (
    <p id='' title='' style={personStyle}>I am a person: {name} {age}</p>
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
