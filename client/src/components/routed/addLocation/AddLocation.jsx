import './addlocation.css'
import { useState } from 'react'
import MyDropzone from '../../unrouted/mydropzone/MyDropzone.jsx'
import MapsJs from '../../unrouted/mapsJs/MapsJs'

import addLocation from '../../../api/locations/addLocation'

export default function AddLocation () {
    // state for images that have been uploaded from react dropzone
    const [ locationImgs, setLocationImgs] = useState([])

    // updates state of location images everytime user adds or removes image
    function parentCallback (acceptedFiles) {
        setLocationImgs(acceptedFiles)
    }    


    // sends location data to /locations/add route
    async function submitHandler (locationData) {
        try {
            const res = await addLocation(locationData)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    const locationImgsData = locationImgs.map(object => object.path)


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
                        <MyDropzone key={1} parentCallback={parentCallback} />
                    </div>


                    {/* chillspot.locationData */}
                    <div className='add-location__input input__box'>
                        <h4 className=''>Drop a marker</h4>
                        <MapsJs />
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