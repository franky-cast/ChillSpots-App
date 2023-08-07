import "./login.css"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

function Login() {
  return (
    <div className="login-page">
      <h2 className="login-header">
        Welcome.
        <br></br>
        Log in to find new spots.
      </h2>

      <div className="login-container">
        <input className="btn user-input" type="text" placeholder="Email address"/>
        <input className="btn user-input" type="password" placeholder="Password"/>
        <button className="btn login-btn" type="submit">Log in</button>
        <button className="btn forgot-btn" type="submit">Forgot your password?</button>
        <div className="btn-container">
          <button className="btn google-btn" type="submit">
            <span className="login-logo"><FcGoogle></FcGoogle></span>
            <span className="login-text">Continue with Google</span>
          </button>
        </div>
        <div className="btn-container">
          <button className="btn facebook-btn" type="submit">
              <span className="login-logo"><BsFacebook></BsFacebook></span>
              <span className="login-text">Continue with Facebook</span>
            </button>
        </div>
        <div className="btn-container">
          <button className="btn apple-btn" type="submit">
              <span className="login-logo"><BsApple></BsApple></span>
              <span className="login-text">Continue with Apple</span>
            </button>
        </div>
        <br></br>
        <span className="no-account">Don't have an account? </span><a href="/signup" className="signup-link">Sign up now</a>
      </div>
    </div>

  )
}

export default Login