import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {

    const navigate = useNavigate();

    const loginPage = () => navigate('/');

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MK Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on MK Social
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton" onClick={loginPage}>Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register