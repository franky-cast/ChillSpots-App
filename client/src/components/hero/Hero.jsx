import "./hero.css"
import { useState, useEffect } from "react"
import signIn from "../../api/users/signIn"
import signOut from "../../api/users/signOut"
import Searchbar from "../searchbar/Searchbar"


function Hero () {
    const [name, setName] = useState("default")

    // keeps throwing error --> "req.cookies['sessionId'] does not exist... \n User is not signed in."
    // even tho i am runing signInHandler() before running signOutHandler()
    // don't have this problem when testing with insomnia
    // --------------------------------------------------------

    // testing the sign in feature
    useEffect(() => {
        async function signInHandler () {
            try {
                const username = "michael_jackson"
                const password = "securePassword123"

                const res = await signIn(username, password)

                setName(res.data.name)

            } catch (err) {
                console.error(`Error fetching user data: ${err}`)
            }
        }
        signInHandler()
    }, [])


    // testing the sign out feature
    useEffect(() => {
        async function signOutHandler () {
            try {
                const res = await signOut()
                console.log(res.data)
                if (res.data.message) {
                    console.log("set name to skank")
                    setName("skank")
                }                
            } catch (err) {
                console.error(`Sign out error: ${err}`)
            }
        }
        signOutHandler()
    }, [])
    

    // --------------------------------------------------------
    
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