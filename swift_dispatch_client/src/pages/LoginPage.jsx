import React, { useEffect, useState } from 'react';
import { Link, Redirect, useNavigate, useLocation } from 'react-router-dom';
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../utils/ApiUtils';
import Alert from 'react-s-alert';
import googleLogo from '../img/google-logo.png';

function Login({ authenticated }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (location.state && location.state.error) {
            setTimeout(() => {
                Alert.error(location.state.error, {
                    timeout: 5000
                });
                navigate(location.pathname, { state: {} });
            }, 100);
        }
    }, [location.state, location.pathname]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginRequest = {
            email: email,
            password: password
        };

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                navigate('/');
            })
            .catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    };

    // if (authenticated) {
    //     return (
    //         <Redirect
    //             to={{
    //                 pathname: "/",
    //                 state: { from: location }
    //             }}
    //         />
    //     );
    // }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded-lg w-96 p-8">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Login to SpringSocial</h1>
                <div className="flex flex-col space-y-4 mb-6">
                    <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                        <img src={googleLogo} alt="Google" className="h-8 mr-2" /> Log in with Google
                    </a>
                </div>
                <div className="text-center mb-4">
                    <span className="text-sm text-gray-600">OR</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                            placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded focus:outline-none hover:bg-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-600">New user? <Link to="/signup" className="text-indigo-500">Sign up!</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
