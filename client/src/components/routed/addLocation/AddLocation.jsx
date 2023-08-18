// css
import './addlocation.css'

// react hooks
import { useState } from 'react'

// sub components
import MyDropzone from '../../unrouted/mydropzone/MyDropzone.jsx'
import MapsJs from '../../unrouted/MapsJs'

// api function
import addLocation from '../../../api/locations/addLocation'


// parent component
export default function AddLocation () {

    // STATE MANAGEMENT
    // state for images from MyDropzone component
    const [ locationImgs, setLocationImgs] = useState([])

    // state for coords from MapsJs component
    const [ marker, setMarker ] = useState(null)

    // state for all location data
    const [ locationData, setLocationData ] = useState({
        name: null,
        description: null,
        files: null,
        coords: null,
        address: null,
        rating: null
    })


    // CALLBACKS
    // updates state of location images everytime user adds or removes image
    // acceptedFiles represents an array of objects, each object being an image
    function imgsCallback (acceptedFiles) {
        setLocationImgs(acceptedFiles)
    }

    // newMarker represents an object
    function coordCallback (newMarker) {
        setMarker(newMarker)
    }


    // validates user input
    function validate () {
        if (locationData.name === null) {
            alert('Must enter location name')
            return
        }
        if (locationData.description === null) {
            alert('Must enter location description')
            return
        }
        if (!locationImgs.length > 0) {
            alert("Must upload images")
            return
        }
        if (!enterAddress && marker === null) {
            alert('Must drop marker on map to specify location')
            return
        }
        if (enterAddress && locationData.address === null) {
            alert('Must enter location address')
            return
        }
        if (locationData.rating === null) {
            alert('Must enter location rating')
            return
        }
        
        submitHandler()
    }


    // API COMMS
    async function submitHandler () {
        // consolidating location data into single object to send in request
        if (enterAddress) {
            setLocationData( prevState => (
                {   ...prevState,
                    files: locationImgs,
                }
            ))
        } else {
            setLocationData( prevState => (
                {   ...prevState,
                    files: locationImgs,
                    coords: marker
                }
            ))
        }

        // API req
        try {            
            const res = await addLocation(locationData)
            console.log(res)
        } catch (e) {
            console.log(e)
        }


        // reset state and inputs here****

    }

    // Boolean for conditional rendering
    const [enterAddress, setEnterAddress] = useState(false)


    return (
        <div className='page__add-location'>
            <div className='add-location'>
                <h2>Upload location</h2>

                <form>

                    {/* chillspot.name */}
                    <input type="text" placeholder='Name of chillspot' name='chillspot-name'
                        className='add-location__input input-text__name' required
                        onChange={ e => setLocationData(prevState => ( {...prevState, name: e.target.value } ))}
                    />


                    {/* chillspot.description */}
                    <input type="text" placeholder='Description' name='chillspot-description'
                        className='add-location__input input-text__description' required
                        onChange={ e => setLocationData(prevState => ( {...prevState, description: e.target.value } ))}
                    />


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
                            <input type="text" placeholder='Enter Address' name='chillspot-address'
                                className='add-location__input'
                                onChange={ e => setLocationData(prevState => ( {...prevState, address: e.target.value } ))}    
                            />
                        }
                    </div>


                    {/* chillspot.rating */}
                    <div className='input__box'>
                        <h4 className='chillspot__ratingHeading'>Select Rating for location</h4>
                        <div className='chillspot__radioBtns'>

                            <div className='radio-button'>
                                <input id='1' type="radio" name='chillspot-rating' value='1'
                                    onChange={ e => setLocationData(prevState => ( {...prevState, rating: e.target.value } ))}
                                />
                                <label htmlFor="">1</label>
                            </div>

                            <div className='radio-button'>
                                <input id='2' type="radio" name='chillspot-rating' value='2'
                                    onChange={ e => setLocationData(prevState => ( {...prevState, rating: e.target.value } ))}
                                />
                                <label htmlFor="">2</label>
                            </div>

                            <div className='radio-button'>
                                <input id='3' type="radio" name='chillspot-rating' value='3'
                                    onChange={ e => setLocationData(prevState => ( {...prevState, rating: e.target.value } ))}
                                />
                                <label htmlFor="">3</label>
                            </div>

                            <div className='radio-button'>
                                <input id='4' type="radio" name='chillspot-rating' value='4'
                                    onChange={ e => setLocationData(prevState => ( {...prevState, rating: e.target.value } ))}
                                />
                                <label htmlFor="">4</label>
                            </div>

                            <div className='radio-button'>
                                <input id='5' type="radio" name='chillspot__rating' value='5'
                                    onChange={ e => setLocationData(prevState => ( {...prevState, rating: e.target.value } ))}
                                />
                                <label htmlFor="">5</label>
                            </div>

                        </div>
                    </div>

                    <button type='button' onClick={validate}> Upload location </button>
                </form>
            </div>
        </div>
    )
}