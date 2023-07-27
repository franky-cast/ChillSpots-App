import { useState, useEffect } from "react"
import "./location.css"
import fetchLocations from "../../api/location"

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
        return (
            location.approved?
            <li key={location._id}>
                <p>name: {location.name}</p>
                <p>length: {location.length}</p>
                <p>difficulty: {location.difficulty}</p>
            </li>
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