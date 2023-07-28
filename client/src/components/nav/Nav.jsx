import "./nav.css"
import logo from "/assets/logos/footerlogo.png"
import hamburgerMenu from "/assets/utilities/hamburger.jpeg"

function Nav () {
    
    return (
        <header>
            <nav className="nav">
                <div className="hamburger-menu-wrap">
                    <a href="#"><img src={hamburgerMenu} alt="hamburger menu" className="hamburger-menu-img" /></a>
                </div>
                <div className="img-wrap">
                    <a href="#"><img src={logo} alt="chill spots" className="img"/></a>
                </div>
            </nav>
        </header>
    )
}

export default Nav