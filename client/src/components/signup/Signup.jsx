import "./signup.css"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import logo from "/assets/logos/treelogo.png"

function Signup () {
    return (
        <div className="signup-page">

            <div className="signup-component">

                <div className="signup-component__img-wrap">
                    <img src={logo} alt="chillspots logo" />
                </div>
                <h2 className="signup-header">Create your free account</h2>

                <div className="alternate-auth">
                    <div className="btn-container">
                        <button className="signup__btn google-btn" type="submit">
                            <span> <FcGoogle></FcGoogle> </span>
                            <span> Continue with Google </span>
                        </button>
                    </div>

                    <div className="btn-container">
                        <button className="signup__btn facebook-btn" type="submit">
                            <span> <BsFacebook></BsFacebook> </span>
                            <span> Continue with Facebook </span>
                        </button>
                    </div>

                    <div className="btn-container">
                        <button className="signup__btn apple-btn" type="submit">
                            <span> <BsApple></BsApple> </span>
                            <span> Continue with Apple </span>
                        </button>
                    </div>
                </div>

                <div className="signup-component__or">
                    <hr />
                    <p>or</p>
                    <hr />
                </div>

                <div className="btn-container">
                    <button className="signup__btn" type="submit">
                        <span> Create a free account </span>
                    </button>
                </div>

                <br></br>

                <p className="no-account">
                    <span>Already have an account?</span> <a href="/login"> Log in </a>
                </p>

                <p className="terms">
                By continuing to use ChillSpots, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>. Personal data added to ChillSpots is public by default — refer to our <span>Privacy FAQs</span> to make changes.
                </p>

            </div>

        </div>
    )
}

export default Signup