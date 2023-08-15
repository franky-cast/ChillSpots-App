import './addlocation.css'
import { useState } from 'react'
import MyDropzone from '../../unrouted/mydropzone/MyDropzone.jsx'

export default function AddLocation () {
    // state for img urls that have been uploaded tom Google Cloud Bucket by child component
    const [ imgUrls, setImgUrls] = useState([])

    // updates imgUrls state by appending url
    function parentCallback (acceptedFiles) {

        // to verify that indeed we are receiving an array of objects that represent the images
        // that have been uploaded to google cloud bucekts
        acceptedFiles.array.forEach(element => {
            console.log(element.sdkUrl)
        })


        // iterates through the parameter (array of objects) and returns each object's sdkUrl
        // the parameter is an array of images, represented by objects, sent by child component
        setImgUrls(acceptedFiles.map(item => item.sdkUrl))
    }    

    return (
        <div className='page__add-location'>
            <div className='add-location'>
                <h2>Upload location</h2>

                <form action="">
                    <input type="text" placeholder='Name of chillspot' name='location-name'/>

                    <div className='imgs-upload'>
                        <MyDropzone key={1} parentCallback={parentCallback} />
                    </div>

                    {/* <input type="text" placeholder='Description' name='chillspots' className='input__description'/>

                    <input type="radio" id="byAddress" name="address" value="address" />
                    <label for="byAddress">Enter By Address</label> <br /> */}
                    

                </form>
            </div>
        </div>
    )
}