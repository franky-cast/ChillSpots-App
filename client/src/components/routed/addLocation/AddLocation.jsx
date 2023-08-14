import './addlocation.css'
import Dropzone from '../../unrouted//dropzone/Dropzone.jsx'

export default function AddLocation () {
    return (
        <div className='add-location'>
            <h2>Upload location</h2>

            <form action="">
                <input type="text" placeholder='Name of chillspot' name='location-name'/>

                <div className='imgs-upload'>
                    <Dropzone />
                </div>


                <div className='coordinates or address of location'>
                    {/* google maps javascript api here */}
                </div>


                <div className='stats'>
                    <input name="stats-rating" list="rating" placeholder='Rating'  />
                    <datalist id="rating" />
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                </div>

                <input type="submit" />


            </form>
        </div>
    )
}