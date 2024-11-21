import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowProject from './pages/ShowProject'

const App = () => {
  return (
    <Routes>
      <Route path='/' element= { <Home/> }/>
      <Route path='/projects/:id' element={ <ShowProject/> }/>
    </Routes>
  )
}

export default App