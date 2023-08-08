import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'

export default function Map (props) {
    const { coordinates } = props
    
    return (
        <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
                <Popup> A pretty CSS3 popup. <br /> Easily customizable. </Popup>
            </Marker>
        </MapContainer>
    )
}