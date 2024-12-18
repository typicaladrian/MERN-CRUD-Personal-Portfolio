import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowProject from './pages/ShowProject'
import AllProjects from './pages/AllProjects'
import Home from './pages/Home'
import ViewResume from './pages/ViewResume'

const App = () => {
  return (
    <Routes>
      <Route path='/' element= { <Home/> }/>
      <Route path='/projects' element= { <AllProjects/> }/>
      <Route path='/projects/:id' element={ <ShowProject/> }/>
      <Route path='/view_resume' element={ <ViewResume/> }/>
    </Routes>
  )
}

export default App