import './home.css'
import { useState, useEffect } from "react"
import Searchbar from "./Searchbar.jsx"
import Card from '../card/Card'
import fetchLocations from "../../api/locations/location.js"


function Home() {
    const [ locations, setLocations ] = useState([])

    const [timeOfDay, setTimeOfDay] = useState()

    useEffect(() => {
      // Creates a time object and sets state
      const determineTimeOfDay = () => {
        const time = new Date().getHours()
        if (time >= 0 && time < 12) {
          setTimeOfDay("morning")
        } else if (time >= 12 && time < 19) {
          setTimeOfDay("afternoon")
        } else {
          setTimeOfDay("evening")
        }
      };
    
      // Fetches data of all locations in Mongo DB
      const fetchLocationsData = async () => {
        try {
          const data = await fetchLocations()
          setLocations(data)
        } catch (err) {
          console.error(`Error fetching location data: ${err}`)
        }
      };
    
      // Runs on mount
      determineTimeOfDay()
      fetchLocationsData()
    }, [])

    const data = locations.map(location => (location.approved && <Card key={location._id} location={location}/>))

  return (
    <div className='home'>
      <div className="hero">
          <p className="greeting">Good {timeOfDay}, {name}</p>
          <Searchbar />
      </div>

      <div className='locations'>
          <p className='heading'>Local Favorites in <strong className='daygo'>San Diego</strong> 🌴☀️</p>
          <div className='card-flex'> {data} </div>
      </div>
    </div>
  )
}

export default Home