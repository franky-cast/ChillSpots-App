// components
import Nav from "./components/nav/Nav.jsx"
import Hero from "./components/hero/Hero.jsx"
import Locations from "./components/locations/Locations.jsx"
import Footer from "./components/footer/Footer.jsx"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from "axios"

// app css
import "./app.css"

function App() {
  return (
    <Router className="app">
      <Nav />
      <Routes>
        <Route exact path="/home" Component={Hero}></Route>
      </Routes>
      <Routes>
        <Route exact path="/home" Component={Locations}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App