import "./card.css"
import star from "../../../public/assets/star.png"

function Card (props) {
    const { name, pictures, stats, address, city, state, latitude, longtitude, approved, timestamp } = props.location
    const coverImg = pictures[0]

    return (
        <a className="card--a-tag" href="#">
            <div className="card">
                <img src={coverImg} alt={`image of ${name}`} className="card--image"></img>
                <div className="card--info">
                    <img src={star} alt="Star icon" className="star-png"></img>
                    {/* <p className="card--rating">{location.stats.rating}</p> */}
                    {/* <p className="card--reviews gray">({location.stats.reviewCount})</p> */}
                    <p className="card--country gray">{city}</p>
                </div>
                <p className="card--title">{name}</p>
                {/* <p className="card--price"> <strong>From ${location.price}</strong> /person</p> */}
            </div>
        </a>
    )
}

export default Card