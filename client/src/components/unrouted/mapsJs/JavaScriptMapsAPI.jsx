import './mapsJs.css'

export default function JavaScriptMapsAPI () {

    let map;

    async function initMap() {
        // The location of San Diego
        const position = { lat: -25.344, lng: 131.031 }
         
        // import libraries
        const { Map } = await google.maps.importLibrary("maps")
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

        // The map, centered at San Diego
        map = new Map(document.getElementById("map"), {
          zoom: 10,
          center: position,
          mapId: "DEMO_MAP_ID",
        })

        // The marker, positioned at San Diego
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "San Diego",
        })
    }

    initMap()

    return(
        <div id='map'>

        </div>
    )
}