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
            <p className="greeting">Good {timeOfDay}</p>
            <Searchbar />
        </div>
    )
}

export default Hero