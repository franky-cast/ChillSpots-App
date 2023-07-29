import "./hero.css"
import { useState, useEffect } from "react"
import signIn from "../../api/users/signIn"
import signOut from "../../api/users/signOut"
import Searchbar from "../searchbar/Searchbar"


function Hero () {
    const [name, setUser] = useState("default")

    // testing the sign in feature
    // useEffect(() => {
    //     const signInHandler = async () => {
    //         const username = "michael_jackson"
    //         const password = "securePassword123"
    //         signIn(username, password)
    //             .then((userData) =>setUser(userData.name))
    //             .catch((err) => console.error(`Error fetching user data: ${err}`))
    //     }
    //     signInHandler()
    // }, [])


    // testing the sign out feature
    // useEffect(() => {
    //     const signOutHandler = async () => {
    //         signOut()
    //             .then((res) => console.log(res))
    //             .catch((err) => console.error(`Sign out error: ${err}`))
    //     }
    //     signOutHandler()
    // }, [])
    
    
    const [timeOfDay, setTimeOfDay] = useState()
    let time
    useEffect (() => {
        time = new Date().getHours()
        if (time >= 0 && time < 12) {
            setTimeOfDay("morning")
        } else if (time >= 12 && time < 19) {
            setTimeOfDay("afternoon")        
        } else {
            setTimeOfDay("evening")        
        }
    },[time])
    

    return (
        <div className="hero">
            <p className="greeting">Good {timeOfDay}, {name}</p>
            <Searchbar />
        </div>

    )
}

export default Hero