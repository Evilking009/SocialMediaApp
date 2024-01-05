import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

    const navigate = useNavigate();

    const navigateToPage = (e) => {

        const buttonId = e.target.id;
        buttonId === 'log' ? navigate('/home') : navigate('/register');

    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MK Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on MK Social.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton" id='log' onClick={(e) => { navigateToPage(e) }}>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" id='reg' onClick={(e) => { navigateToPage(e) }}>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login