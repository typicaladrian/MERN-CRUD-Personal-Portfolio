import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowProject from './pages/ShowProject'
import AllProjects from './pages/AllProjects'

const App = () => {
  return (
    <Routes>
      <Route path='/' element= { <Home/> }/>
      <Route path='/projects' element= { <AllProjects/> }/>
      <Route path='/projects/:id' element={ <ShowProject/> }/>
    </Routes>
  )
}

export default App