import './searchbar.css'
import svgArrow from "/assets/utilities/icon-arrow.svg"

function Searchbar () {
    return (
        <form className="form d-flex" action="#">
            <input id="input-el" className="searchbar__input" type="text" placeholder="search by spot name" />
            <button id="button" className='searchbar__button'><img className="svg-arrow" src={svgArrow} alt="Search button" /></button>
        </form>
    )
}

export default Searchbar