import "./hero.css"
import { useState, useEffect } from "react"
import Searchbar from "../searchbar/Searchbar"


function Hero (props) {
    const { signIn,  signOut } = props
    const [name, setName] = useState("default")
    
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
            <div className="demo-btns-container">
                <div className="demo-btn-wrap"><button onClick={() => signIn(setName)} className="demoBtn">Test signIn</button></div>
                <div className="demo-btn-wrap"><button onClick={() => signOut(setName)} className="demoBtn">Test signOut</button></div>            
            </div>
            <p className="greeting">Good {timeOfDay}, {name}</p>
            <Searchbar />
        </div>

    )
}

export default Hero