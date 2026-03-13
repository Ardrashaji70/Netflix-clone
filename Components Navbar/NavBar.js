import React from 'react'
import './NavBar.css';

function NavBar({ setSearch }) {

  return (
    <div className='navbar'>
      <h2>Netflix</h2>

     <div className='search'>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
        <img className='netfixlogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  )
}

export default NavBar