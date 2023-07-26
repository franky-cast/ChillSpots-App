import "./hero.css"

function Hero (props) {
    // props is data for user who is currently logged in
    // const { name } = prop

    // for now
    const user = {
        name: "Francisco"
    }

    const date = new Date()
    const time = date.getHours()
    let timeOfDay
    if (time < 12) {
        timeOfDay = "morning"
    }

    return (
        <div className="hero">
            <p className="greeting">Good {timeOfDay}, {user.name}</p>            
        </div>
    )
}

export default Hero