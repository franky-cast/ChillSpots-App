// components
import Nav from "./components/nav/Nav.jsx"
import Hero from "./components/hero/Hero.jsx"
import Locations from "./components/locations/Locations.jsx"
import Mapview from "./components/mapview/Mapview.jsx"
import Footer from "./components/footer/Footer.jsx"

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
        <Nav />
        <Hero key={1} signIn={signInHandler} signOut= {signOutHandler}/>
        <Locations />
        <Footer />
    </div>
  )
}

export default App