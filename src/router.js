import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Vehicles from './pages/vehicles'
import TypeVehicle from './pages/vehicles/typeVehicle'
import Details from './pages/vehicles/details'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/vehicles/:category" element={<TypeVehicle />} />
        <Route exact path="/vehicles/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
