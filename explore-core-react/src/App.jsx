import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo';
import Actor  from './actor';
import Singer from './Singer';

function App() {
  const actors = ['Chris Hemsworth', 'RDJ', 'Chris Evan', 'Tom Holland'];
  // const time = 50;

  const singers = [
    {id : 1, name: 'Arijith Singh', age: 35},
    {id : 2, name: 'Lena Del Ray', age: 33},
    {id : 3, name: 'Ed Sheeren', age: 31},
  ]
  return (
    <>
      <h1>React Core Concept</h1>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }


      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}


      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}></ToDo>
      <ToDo
        task="Revise JS"
        isDone={false}></ToDo>
      <ToDo
        task="Take a shower"
        isDone={true} time=""></ToDo> */}

      {/* <Student></Student>
      <Person></Person>
      <Developer name="Jamshed" tech="JS"></Developer>
      <Developer name="Mumir" tech="Python"></Developer>
      <Device name="Desktop" model="Customize" price="55,000"></Device>
      <Device name="Mobile" model="Xiaomi" price="30,000"></Device>
      <Device name="Monitor" model="Walton" price="14,000"></Device>
      <Player name="Kholi" runs="10,000"></Player>
      <Player name="Williamson" runs="7,000"></Player>
      <Salami event="Roja Eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  )
}

function Salami({ event, amount = 0 }) {
  return (
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}


function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

// const {name, tech} = {name : 'Jamshed', tech : 'JS'}

function Device(props) {
  return (
    <div style={{
      border: '2px solid purple',
      borderRadius: '20px',
      marginTop: '10px',
    }}>
      <h3>Device: {props.name}</h3>
      <h4>Model: {props.model} </h4>
      <p>Price: {props.price} </p>

    </div>
  )
}

function Student() {

  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Developer(props) {
  // console.log(props);

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Jamshed';

  const personStyle = {
    color: 'red',
    textAlign: 'left',

  }
  return (
    <p id='' title='' style={personStyle}>I am a person: {name} {age}</p>
  )
}

function Sports() {
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
