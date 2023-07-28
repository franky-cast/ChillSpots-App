// components
import Nav from "./components/nav/Nav.jsx"
import Hero from "./components/hero/Hero.jsx"
import Locations from "./components/locations/Locations.jsx"

// app css
import "./app.css"

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Locations />
    </div>
  )
}

export default App