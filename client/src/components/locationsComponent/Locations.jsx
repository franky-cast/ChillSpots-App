import './locations.css'
import Card from '../cardComponent/Card'
import fetchLocations from "../../api/location"
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

    const data = locations.map(location => (location.approved && <Card key={location._id} location= {location}/>) )

    return (
        <div className='container'>
            <p>Locations component</p>
            <div> {data} </div>
        </div>
    )
}

export default Locations