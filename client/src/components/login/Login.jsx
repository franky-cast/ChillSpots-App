import "./login.css"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsApple } from "react-icons/bs"

// API functions -- being used for testing currently
import signIn from "../../api/users/signIn"
import signOut from "../../api/users/signOut"
import { useEffect, useState } from "react"

function Login () {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ login, setLogin ] = useState(false)

    const emailInputEl = document.getElementById("email-input-el")
    const passwordInputEl = document.getElementById("password-input-el")


    // --------------------------------------------------------
    // req.cookies.sessionId does not exist when calling the functions from front end.
    // they do, however, exist, and everything works properly, when making the requests with insomnia...
    // is it becasue react app running on localhost:5173 and express app running on localhost:8080 ???
    // --------------------------------------------------------

    
    
    async function signInHandler () {
        if (email && password) {
            try {
                const res = await signIn(email, password)
                if (res === null || res === undefined) {
                    alert("Incorrect password or username")
                } else {
                    console.log(res.data)
                    alert(`${res.data.name} successfully signed in!`)
                    emailInputEl.placeholder = "Email"
                }
                passwordInputEl.placeholder = "Password"
            } catch (err) {
                console.error(`Error fetching user data: ${err}`)
            }
        } else {
            alert("Enter both a password and a username")
        }
    }

    useEffect(() => {
        if (login) {
            signInHandler()
            setLogin(false)
        }
    }, [login])
        

    async function signOutHandler () {
        try {
            const res = await signOut()
            console.log (res)
            console.log(res.data)
        } catch (err) {
            console.error(`Error fetching user data: ${err}`)
        }
    }


    return (
        <div className="login-page">

            <div className="login-component">

                <h2 className="login-header">
                    Welcome.
                    <br></br>
                    Log in to find new spots.
                </h2>

                <form className="login-container">
                    <input id="email-input-el" className="login-container__input" type="text" placeholder="Email address" onChange={ (e) => setEmail(e.target.value) } required/>
                    <input id="password-input-el" className="login-container__input" type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) } required/>
                    <div>
                        <a className="login__btn" onClick={() => setLogin(true)}>Log in</a>
                    </div>
                </form>

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

                <p className="terms">By continuing to use ChillSpots, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>. Personal data added to ChillSpots is public by default — refer to our <span>Privacy FAQs</span> to make changes.</p>

            </div>

        </div>
    )
}

export default Login