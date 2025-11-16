import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
    return (

        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Start Now</h1>
                    <p>
                        Connect with people from around the world, share your moments,
                        and discover new stories every day. Create your account and start your journey now.
                    </p>
                    <span>Already have an account?</span>
                    <Link to='/login'> <button>Login</button></Link>

                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder='Username' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="text" placeholder='Username' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register