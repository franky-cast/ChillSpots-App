import './locations.css'
import Card from '../card/Card'
import fetchLocations from "../../api/locations/location.js"
import { useState, useEffect } from "react"

function Locations () {
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

    const data = locations.map(location => (location.approved && <Card key={location._id} location={location}/>) )

    return (
        <div className='locations'>
            <p className='heading'>Local Favorites in <strong className='daygo'>San Diego</strong> 🌴☀️</p>
            <div className='card-flex'> {data} </div>
        </div>
    )
}

export default Locations