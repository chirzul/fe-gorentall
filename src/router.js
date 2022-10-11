import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Vehicles from './pages/vehicles'
import TypeVehicle from './pages/vehicles/typeVehicle'
import Details from './pages/vehicles/details'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/vehicles/:category" component={TypeVehicle} />
        <Route exact path="/vehicles/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
