import './addlocation.css'
import { useState } from 'react'
import MyDropzone from '../../unrouted/mydropzone/MyDropzone.jsx'
import addLocation from '../../../api/locations/addLocation'

export default function AddLocation () {
    // state for images that have been uploaded from react dropzone
    const [ locationImgs, setLocationImgs] = useState([])

    // updates state of location images everytime user adds or removes image
    function parentCallback (acceptedFiles) {
        setLocationImgs(acceptedFiles)
    }    


    // sends location data to /locations/add
    // async function formSubmitHandler (locationData, fork) {
    //     if (locationImgs?.length) {
    //         try {

    //             const res = await addLocation(locationData, fork)
    //         } catch (e) {
    //             console.log(``)
    //         }
    //     }
    // }

    const locationImgsData = locationImgs.map(object => object.path)


    return (
        <div className='page__add-location'>
            <div className='add-location'>
                <h2>Upload location</h2>

                <form action="">
                    <input type="text" placeholder='Name of chillspot' name='location-name' required/>

                    <div className='imgs-upload'>
                        <MyDropzone key={1} parentCallback={parentCallback} />
                    </div>

                    {locationImgsData}

                    {/* <input type="text" placeholder='Description' name='chillspots' className='input__description'/>

                    <input type="radio" id="byAddress" name="address" value="address" />
                    <label for="byAddress">Enter By Address</label> <br /> */}
                    

                </form>
            </div>
        </div>
    )
}