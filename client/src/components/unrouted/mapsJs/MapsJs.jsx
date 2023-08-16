// might have to use a different library .. cant seem to place a marker on this map

import './mapsJs.css'

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


export default function  MapsJs () {
    const [ marker, setMarker ] = useState({
        lat: 32.7157,
        lng: -117.1611 
    })

    // specifications for the map
    const containerStyle = {
        width: '100%',
        height: '400px',
    }
    const center = {
        lat: 32.7157,
        lng: -117.1611 
    }


    return (
        <div className='mapsJs'>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}



// click handler for marker
// const handleMapClick = (event) => {
//     const newMarker = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     }
//     setMarker (newMarker)
// }

// onclick event for google map
// onClick={handleMapClick}

// conditional rendering of map marker component
// { marker?.lat?.lng && <Marker position={marker} /> }