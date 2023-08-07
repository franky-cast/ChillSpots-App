// components
import Nav from "./components/nav/Nav.jsx"
import Login from "./components/login/Login.jsx"
import Signup from "./components/signup/Signup.jsx"
import Home from "./components/home/Home.jsx"
import Discover from "./components/discover/Discover.jsx"
import Saved from "./components/saved/Saved.jsx"
import Profile from "./components/profile/Profile.jsx"
import Footer from "./components/footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import signIn from "./api/users/signIn"
import signOut from "./api/users/signOut"


// app css
import "./app.css"

function App() {

    // --------------------------------------------------------
    // req.cookies.sessionId does not exist when calling the functions from front end.
    // they do, however, exist, and everything works properly, when making the requests with insomnia...
    // is it becasue react app running on localhost:5173 and express app running on localhost:8080 ???
    // --------------------------------------------------------


    // testing the sign in feature
    // calls api func, fired by button
    async function signInHandler (setState) {
        try {
            const username = "michael_jackson"
            const password = "securePassword123"
            const res = await signIn(username, password)
            console.log(res)
            setState(res.data.name)   
        } catch (err) {
            console.error(`Error fetching user data: ${err}`)
        }
    }
    // testing the sign out feature
    // calls api func, fired by button
    async function signOutHandler (setState) {
        try {
            const res = await signOut()
            console.log(res.data)
            // if (res.data.messgage) {
            //     setState("default")
            // }
            setState("default")
        } catch (err) {
            console.error(`Error fetching user data: ${err}`)
        }
    }


  return (
    <div className="app">
        <Router>
            <Nav />
            <Routes>
                <Route path='/' exact element={<Home key={1} signIn={signInHandler} signOut= {signOutHandler} />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/logout' element={<Home />} /> */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    </div>
  )
}

export default App