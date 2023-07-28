import "./hero.css"
import { useState, useEffect } from "react"
import signIn from "../../api/users/signIn"
import Searchbar from "../searchbar/Searchbar"

function Hero () {
    // const [name, setUser] = useState("human")

    // testing the sign in feature
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const username = "michael_jackson"
    //         const password = "securePassword123"
    //         try {
    //             const userData = await signIn(username, password)
    //             console.log(userData)
    //             setUser(userData.name)
    //         } catch (err) {
    //             console.error(`Error fetching user data: ${err}`)
    //         }
    //     }
    //     fetchUserData ()
    // }, [])
    
    

    const date = new Date()
    const time = date.getHours()
    let timeOfDay
    if (time >= 0 && time < 12) {
        timeOfDay = "morning"
    } else if (time >= 12 && time < 7) {
        timeOfDay = "afternoon"        
    } else {
        timeOfDay = "evening"
    }

    return (
        <div className="hero">
            <p className="greeting">Good {timeOfDay}</p>
            <Searchbar />
        </div>
    )
}

export default Hero