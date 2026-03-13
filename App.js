import React from 'react'
import NavBar from './Components Navbar/NavBar'
import  './App.css';
import {originals,action,Romantic,Comedy,Animation,Horror,Thriller} from './Urals'
import Banner from './Components Navbar/Banner/Banner';
import Rowpost from './Components Navbar/Rowpost/Rowpost';
import Login from './Components Navbar/Login/Login';
import { useState } from 'react'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search] = useState('');

  if(!isLoggedIn){
    return <Login setIsLoggedIn={setIsLoggedIn}/>
  }

  return (
    <div className='app'>
      <h2>Search: {search}</h2>

      
      <NavBar/>
      <Banner/>

      <Rowpost Url={originals} title='Netflix originals'/>
      <Rowpost Url={action} title='Action' isSmall={true}/>
      <Rowpost Url={Romantic} title='Romantic' isSmall={true}/>
      <Rowpost Url={Comedy} title='Comedy' isSmall={true}/>
      <Rowpost Url={Animation} title='Animation' isSmall={true}/>
      <Rowpost Url={Horror} title='Horror' isSmall={true}/>
      <Rowpost Url={Thriller} title='Thriller' isSmall={true}/>
    </div>
  )
}
export default App