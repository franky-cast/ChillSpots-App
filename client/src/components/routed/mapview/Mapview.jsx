import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchLocaiton from '../../../api/locations/getCoordinates'
import './mapview.css'
import Map from '../../unrouted/map/Map'

export default function Mapview () {
    const [ map, setMap] = useState()

    // extracting location's object id from the URL
    const { id } = useParams()

    useEffect (() => {
        async function fetchLocationData (id) {
            try {
                const res = await fetchLocation(id)
                const { _id, plus_code } = res

                setMap( <Map key={_id} plus_code={plus_code} /> )

            } catch (err) {
                console.log(`Error fetching location data for mapview: ${err}`)
            }
        }
        
        fetchLocationData(id)
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