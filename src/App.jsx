import { useState } from 'react'
import './App.css' 
import profile from './profile.jpg'

function App() {

  return (
    <div>
      <div className="nav">
        <h1>Elias Palmer</h1>
      </div>
      <div className='profile-card'>
        <img src={profile} className="profile-img"/>
        <h1 className='title'>Welcome to my Portfolio!!</h1>
        <h3 className='profile-info'>   It's a work in progress, but here's a small Tic Tac Toe project, I made to test my React skills.</h3>
        <a className='project-link' href='https://soft-sherbet-274393.netlify.app'>Tic Tac Toe project</a>
      </div>
      
    </div>
  )
}

export default App
