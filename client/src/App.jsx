// components
import Nav from "./components/navComponent/Nav.jsx"
import Hero from "./components/heroComponent/Hero.jsx"
import Locations from "./components/locationsComponent/Locations.jsx"

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