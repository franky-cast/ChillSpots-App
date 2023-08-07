import './mapview.css'
import { useState, useEffect } from 'react'
import fetchLocation from "../../api/locations/getCoordinates.js"
import Map from './Map.jsx'

export default function Mapview (props) {
    const [ map, setMap] = useState()

    useEffect (() => {
        async function fetchLocationData (id) {
            try {
                const res = await fetchLocation(id)
                const { latitude, longitude } = res
                const position = [latitude, longitude]

                setMap( <Map key={position} coordinates={position} /> )

            } catch (err) {
                console.log(`Error fetching location data for mapview: ${err}`)
            }
        }
        // this id needs to be passed as prop
        fetchLocationData("64c2d31c3e7b03d9dd46268f")
    }, [])

    return (
        <div>
            <p>Map here</p>
            <div className='map-container'>
                {map}
            </div>
        </div>
    )   
}