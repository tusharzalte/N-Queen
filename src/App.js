import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Visualize from "./components/pages/Visualize"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/visualize' exact component={Visualize} />
      </Switch>
    </Router>
  )
}

export default App
