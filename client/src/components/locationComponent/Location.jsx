import { useState, useEffect } from "react"
import "./location.css"
import fetchLocations from "../../api/location"
import star from "../../../public/assets/star.png"


function Location () {
    const [ locations, setLocations ] = useState([])

    useEffect(() => {
        const fetchLocationsData = async () => {
            try {
                const data = await fetchLocations()
                setLocations(data)
            } catch (err) {
                console.error(`Error fetching location data: ${err}`)
            }
        }
        fetchLocationsData()
    }, [])

    const data = locations.map( (location) => {
        const coverImg = location.pictures[0]
        return (
            location.approved?
            <a className="card--a-tag" href="#">
                <div className="card">
                    <img src={coverImg} alt={location.name} className="card--image"></img>
                    <div className="card--info">
                        <img src={star} alt="Star icon" className="star-png"></img>
                        {/* <p className="card--rating">{location.stats.rating}</p> */}
                        {/* <p className="card--reviews gray">({location.stats.reviewCount})</p> */}
                        <p className="card--country gray">{location.city}</p>
                    </div>
                    <p className="card--title">{location.title}</p>
                    {/* <p className="card--price"> <strong>From ${location.price}</strong> /person</p> */}
                </div>
            </a>
            :
            null
        )
    })

    return (
        <ul>
            {data}
        </ul>
    )
}

export default Location