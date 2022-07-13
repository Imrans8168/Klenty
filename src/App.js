import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Acceleration from './components/Acceleration/Acceleration'
import Customer from './components/Customer Stories/Customer'
import Platform from './components/Platform/Platform'
import Pricing from './components/Pricing/Pricing'
import Resources from './components/Resources/Resources'
const App = () => {
  return (
  <>
    <Navbar/>
   
    <Routes>
          <Route exact path="/" element={<Platform/>} />
          <Route path="/customer" element={ <Customer /> } />
          <Route path="/acceleration" element={<Acceleration/> }/>
          <Route path="/pricing"  element={ <Pricing />} />
          <Route path ='/resources' element={<Resources />}/>     
   </Routes>
  </>
  )
}

export default App