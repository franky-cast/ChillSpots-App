import { useState } from 'react';
import "./nav.css"
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import logo from "/assets/logos/footerlogo.png"
import menu from "/assets/utilities/hamburger.jpeg"
import * as FaIcons from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';
import { FiLogIn } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai"
import { MdOutlineLogout } from 'react-icons/md'
import signOut from "../../../api/users/signOut"



function Nav() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    
    return (
        <IconContext.Provider value={{ color: 'black' }}>
            <div className='navbar'>
                <Link to='#' className='hamburger-menu-wrap'>
                    <img
                        src={menu}
                        onClick={showSidebar}
                        alt='hamburger menu'
                        className='hamburger-menu-img' />
                </Link>
                <a href="/" className="img-wrap">
                    <img
                        src={logo}
                        alt="chill spots"
                        className="img"
                    />
                </a>

                <nav className='pc-nav'>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="nav-item">
                            <Link to='/'>
                                <AiFillHome className='nav-icon' />
                                <span>Home</span>
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to='/add-location'>
                                <FaIcons.FaPlusCircle className='nav-icon' />
                                <span>Add location</span>
                            </Link>
                        </li> */}
                    
                        <li className="nav-item">
                            <Link to='/discover'>
                                <FaIcons.FaGlobeAmericas className='nav-icon' />
                                <span>Discover</span>
                            </Link>
                        </li>

                        

                        {/* make this a drop down with "saved" as one of the options */}
                        {/* <li className="nav-item">
                            <Link to='/profile'>
                                <FaIcons6.FaCircleUser className='nav-icon' />
                                <span>Profile</span>
                            </Link>
                        </li> */}
                        {(() => {
                            if (localStorage.userIsLoggedIn === "true") {
                                return (
                                    <>
                                        <li className="nav-item">
                                            <Link to='/add-location'>
                                                <FaIcons.FaPlusCircle className='nav-icon' />
                                                <span>Add location</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/saved'>
                                                <FaIcons.FaBookmark className='nav-icon' />
                                                <span>Saved</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/profile'>
                                                <FaIcons6.FaCircleUser className='nav-icon' />
                                                <span>Profile</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <a href="" onClick={signOut}>
                                                <MdOutlineLogout className='nav-icon' />
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <li className='nav-item'>
                                            <Link to='/login'>
                                                <FiLogIn className="nav-icon" />
                                                <span>Login</span>
                                            </Link>
                                        </li>
                                    </>
                                )
                            }
                        })()}
                        {/* <li className="nav-item">
                            <Link to='/saved'>
                                <FaIcons.FaBookmark className='nav-icon' />
                                <span>Saved</span>
                            </Link>
                        </li> */}

                        {/* <li className='nav-item'>
                            <Link to='/login'>
                                <FiLogIn className="nav-icon" />
                                <span>Login</span>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        
    
            <nav className={sidebar ? 'nav active' : 'nav'} style={{ zIndex: 99 }}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='hamburger-menu-wrap'>
                            <FaIcons6.FaXmark />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/'>
                            <FaIcons.FaSearch className='nav-icon' />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/add-location'>
                            <FaIcons.FaPlusCircle className='nav-icon' />
                            <span>Add location</span>
                        </Link>
                    </li>
                    
                    {/* <li className="nav-item">
                        <Link to='/discover'>
                            <FaIcons.FaGlobeAmericas className='nav-icon' />
                            <span>Discover</span>
                        </Link>
                    </li> */}

                    {/* <li className="nav-item">
                        <Link to='/saved'>
                            <FaIcons.FaBookmark className='nav-icon' />
                            <span>Saved</span>
                        </Link>
                    </li> */}

                    <li className="nav-item">
                        <Link to='/profile'>
                            <FaIcons6.FaCircleUser className='nav-icon' />
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/login'>
                            <FiLogIn className="nav-icon" />
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    );
}

export default Nav;