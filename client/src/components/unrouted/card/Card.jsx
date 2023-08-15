import "./card.css"
import star from "/assets/utilities/star.png"
import sunsetCliffs from "/assets/locations/sunsetCliffs.jpeg"
import missionBay from "/assets/locations/missionbay.webp"
import laJollaCove from "/assets/locations/lajollacove.webp"
import balboaPark from "/assets/locations/balboapark.jpeg"


function Card (props) {
    const { name, pictures, stats, address, lat, lng, approved, place_id, timestamp } = props.location

    let coverImg
    switch (name) {
        case ("Sunset Cliffs"):
            coverImg = sunsetCliffs
            break
        case ("Mission Bay Park"):
            coverImg = missionBay
            break
        case ("La Jolla Cove"):
            coverImg = laJollaCove
            break
        case ("Balboa Park"):
            coverImg = balboaPark
            break
    }

    return (
        <a className="card--a-tag" href={`/mapview/${props.location._id}`}>
            <div className="card">
                <img src={coverImg} alt={`image of ${name}`} className="card--image"></img>
                <div className="card--info">
                    <img src={star} alt="Star icon" className="star-png"></img>
                    {/* <p className="card--rating">{location.stats.rating}</p> */}
                    {/* <p className="card--reviews gray">({location.stats.reviewCount})</p> */}
                    <p className="card--country gray">{name}</p>
                </div>
                {/* <p className="card--title">{description}</p> */}
                {/* <p className="card--price"> <strong>From ${location.price}</strong> /person</p> */}
            </div>
        </a>
    )
}

export default Card