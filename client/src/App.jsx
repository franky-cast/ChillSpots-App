// components
import Nav from "./components/routed/nav/Nav.jsx"
import Mapview from "./components/routed/mapview/Mapview.jsx"
import Login from "./components/routed/login/Login.jsx"
import Signup from "./components/routed/signup/Signup.jsx"
import Home from "./components/routed/home/Home.jsx"
import AddLocation from "./components/routed/addLocation/AddLocation.jsx"

// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// app css
import "./app.css"

function App() {

  return (
    <div className="app">
        <Router>
            <Nav />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/mapview/:id' element={<Mapview />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='add-location' element={<AddLocation />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App