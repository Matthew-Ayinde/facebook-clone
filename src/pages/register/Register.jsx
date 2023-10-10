import './register.css'

const register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>IdanSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Idansocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="confirm password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login into existing account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default register