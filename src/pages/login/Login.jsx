import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello Friend</h1>
                    <p>
                        Connect with your friends, share your moments, and discover what's happening around the world.
                    </p>
                    <span>Don't have an account?</span>
                    <Link to="/register"><button>Register</button></Link>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login