import "./login.css"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

function Login () {
    return (
        <div className="login-page">

            <div className="login-component">

                <h2 className="login-header">
                    Welcome.
                    <br></br>
                    Log in to find new spots.
                </h2>

                <div className="login-container">
                    <input className="input-container__input" type="text" placeholder="Email address"/>
                    <input className="input-container__input" type="password" placeholder="Password"/>
                    <div>
                        <button className="login__btn" type="submit">Log in</button>
                    </div>
                </div>

                <div className="atag__forgot-password">
                    <a href="/users/password/new"> <strong> Forgot your password? </strong> </a>
                </div>

                <div className="alternate-login">
                    <div className="btn-container">
                        <button className="login__btn google-btn" type="submit">
                            <span> <FcGoogle></FcGoogle> </span>
                            <span> Continue with Google </span>
                        </button>
                    </div>

                    <div className="btn-container">
                        <button className="login__btn facebook-btn" type="submit">
                            <span> <BsFacebook></BsFacebook> </span>
                            <span> Continue with Facebook </span>
                        </button>
                    </div>

                    <div className="btn-container">
                        <button className="login__btn apple-btn" type="submit">
                            <span> <BsApple></BsApple> </span>
                            <span> Continue with Apple </span>
                        </button>
                    </div>
                </div>

                <p className="no-account">
                    <span>Don't have an account?</span> <a href="/signup"> Sign up for free </a>
                </p>

            </div>

        </div>
    )
}

export default Login