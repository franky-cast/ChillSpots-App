// components
import Nav from "./components/navComponent/Nav.jsx"
import Hero from "./components/heroComponent/Hero.jsx"
import Test from "./components/testComponent/Test.jsx"
import Location from "./components/locationComponent/Location.jsx"

// app css
import "./app.css"

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      {/* <div className="container">
        <Test />
        <Location />
      </div> */}
    </div>
  )
}

export default App