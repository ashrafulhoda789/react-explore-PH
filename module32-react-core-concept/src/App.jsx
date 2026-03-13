import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './Counters';
import Batsman from './Batsman';
import Bowler from "./Bowler";
import Users from "./Users";
import './App.css'
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


const fetchPosts = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();

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

      <Counter></Counter>

      <Players></Players>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      <Bowler></Bowler>


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
