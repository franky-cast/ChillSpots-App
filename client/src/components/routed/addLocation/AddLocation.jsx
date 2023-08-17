import './addlocation.css'
import { useState } from 'react'
import MyDropzone from '../../unrouted/mydropzone/MyDropzone.jsx'

// using library
import MapsJs from '../../unrouted/MapsJs'

import addLocation from '../../../api/locations/addLocation'

export default function AddLocation () {

    // STATE MANAGEMENT
    // state for images that have been uploaded from react dropzone
    const [ locationImgs, setLocationImgs] = useState([])
    const [ marker, setMarker ] = useState({})


    // CALLBACKS
    // updates state of location images everytime user adds or removes image
    function imgsCallback (acceptedFiles) {
        setLocationImgs(acceptedFiles)
    }
    function coordCallback (newMarker) {
        setMarker(newMarker)
    }


    // Boolean for conditional rendering
    const [enterAddress, setEnterAddress] = useState(true)

    // API COMMS
    // sends location data to /locations/add route
    async function submitHandler (locationData) {
        try {
            const res = await addLocation(locationData)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='page__add-location'>
            <div className='add-location'>
                <h2>Upload location</h2>

                <form action="" onSubmit={submitHandler}>

                    {/* chillspot.name */}
                    <input type="text" placeholder='Name of chillspot' name='chillspot-name' className='add-location__input input-text__name' required/>


                    {/* chillspot.description */}
                    <input type="text" placeholder='Description' name='chillspot-description' className='add-location__input input-text__description' required/>


                    {/* chillspot.pictures */}
                    <div className='add-location__input input__box'>
                        <h4 className=''>Upload images</h4>
                        <MyDropzone key={1} callback={imgsCallback} />
                    </div>


                    {/* chillspot.locationData */}
                    <div className='add-location__input input__box'>
                        <button type='button' onClick={() => setEnterAddress(prevState => !prevState)}>
                            {enterAddress && <p>Specify with marker</p>}
                            {!enterAddress && <p>Specify with address</p>}
                        </button>

                        {!enterAddress && <h4 className=''>Drop a marker</h4>}
                        {!enterAddress && <MapsJs callback={coordCallback} />}

                        {enterAddress && <h4 className=''>Enter Address</h4>}
                        {
                            enterAddress &&
                            <input type="text" placeholder='Enter Address' name='chillspot-address' className='add-location__input'/>
                        }
                    </div>


                    {/* chillspot.rating */}
                    <div className='input__box'>
                        <h4 className='chillspot__ratingHeading'>Select Rating for location</h4>
                        <div className='chillspot__radioBtns'>

                            <div className='radio-button'>
                                <input id='1' type="radio" name='chillspot__rating' value={1}/>
                                <label htmlFor="">1</label>
                            </div>

                            <div className='radio-button'>
                                <input id='2' type="radio" name='chillspot__rating' value={2}/>
                                <label htmlFor="">2</label>
                            </div>

                            <div className='radio-button'>
                                <input id='3' type="radio" name='chillspot__rating' value={3}/>
                                <label htmlFor="">3</label>
                            </div>

                            <div className='radio-button'>
                                <input id='4' type="radio" name='chillspot__rating' value={4}/>
                                <label htmlFor="">4</label>
                            </div>

                            <div className='radio-button'>
                                <input id='5' type="radio" name='chillspot__rating' value={5}/>
                                <label htmlFor="">5</label>
                            </div>

                        </div>
                    </div>

                    <button type='submit'>Upload location</button>
                </form>
            </div>
        </div>
    )
}