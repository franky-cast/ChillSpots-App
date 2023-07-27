import "./nav.css"
import logo from "/assets/logo.jpeg"
import hamburgerMenu from "/assets/hamburger.jpeg"

function Nav () {
    const isMobile = true

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