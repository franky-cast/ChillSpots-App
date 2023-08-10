// components
import Nav from "./components/nav/Nav.jsx"
// import Hero from "./components/hero/Hero.jsx"
// import Locations from "./components/locations/Locations.jsx"
import Mapview from "./components/mapview/Mapview.jsx"
import Login from "./components/login/Login.jsx"
import Signup from "./components/signup/Signup.jsx"
import Home from "./components/home/Home.jsx"
import Discover from "./components/discover/Discover.jsx"
import Saved from "./components/saved/Saved.jsx"
import Profile from "./components/profile/Profile.jsx"
import Footer from "./components/footer/Footer.jsx"

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

                {/* <Route path='/profile' element={<Profile />} /> */}
                {/* <Route path='/discover' element={<Discover />} /> */}
                {/* <Route path='/saved' element={<Saved />} /> */}
            </Routes>
            {/* <Footer /> */}
        </Router>
    </div>
  )
}

export default App