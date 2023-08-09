import './home.css'
import { useState, useEffect } from "react"
import Searchbar from "../searchbar/Searchbar"
import Card from '../card/Card'
import fetchLocations from "../../api/locations/location.js"


function Home(props) {

    const { signIn,  signOut } = props
    const [name, setName] = useState("default")
    const [ locations, setLocations ] = useState([])
    
    const [timeOfDay, setTimeOfDay] = useState()

    useEffect(() => {
      // Function to determine the time of day
      const determineTimeOfDay = () => {
        const time = new Date().getHours();
        if (time >= 0 && time < 12) {
          setTimeOfDay("morning");
        } else if (time >= 12 && time < 19) {
          setTimeOfDay("afternoon");
        } else {
          setTimeOfDay("evening");
        }
      };
    
      // Function to fetch locations data
      const fetchLocationsData = async () => {
        try {
          const data = await fetchLocations();
          setLocations(data);
        } catch (err) {
          console.error(`Error fetching location data: ${err}`);
        }
      };
    
      // Call the functions
      determineTimeOfDay();
      fetchLocationsData();
    }, []);

    const data = locations.map(location => (location.approved && <Card key={location._id} location={location}/>))

  return (
    <div>
      <div className="hero">
          <div className="demo-btns-container">
              <div className="demo-btn-wrap"><button onClick={() => signIn(setName)} className="demoBtn">Test signIn</button></div>
              <div className="demo-btn-wrap"><button onClick={() => signOut(setName)} className="demoBtn">Test signOut</button></div>            
          </div>
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