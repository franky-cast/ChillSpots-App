import React, { useState } from 'react';
import { GoogleMap, MarkerF, useLoadScript, LoadScript } from '@react-google-maps/api'

const mapstyle = { width: '100%', height: '400px' }
const center = { lat: 32.7157, lng: -117.1611 }

function Map ({ callback }) {
    const [ marker, setMarker ] = useState()
    // click handler for marker
    const handleMapClick = (event) => {
        const newMarker = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        }
        setMarker(newMarker)
        callback(newMarker)
    }

    return (
        <GoogleMap mapContainerStyle={mapstyle} center={center} zoom={13} onClick={handleMapClick}>
            { marker && <MarkerF position={marker} /> }
        </GoogleMap>
    )
}


// Component
export default function  MapsJs ({ callback }) {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY })
    if (!isLoaded) return <div>Loading ... Please wait</div>

    return (
        <Map callback={callback} />
    )
}