import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GOOGLE_AUTH_URL } from '../../constants';
import { signup } from '../../utils/ApiUtils';
import googleLogo from '../../img/google-logo.png';
import { toast } from "react-hot-toast";

const Signup = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    if (authenticated) {
        return (
            <Navigate to={{ pathname: "/", state: { from: props.location } }} />
        );
    }

    return (
        <div className="signup-container text-center">
            <div className="signup-content bg-white shadow-md rounded-lg w-500 inline-block mt-30 align-middle p-35">
                <h1 className="signup-title text-base font-semibold mt-0 mb-30 text-gray-700">
                    Signup with SpringSocial
                </h1>
                <SocialSignup />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm {...props} setAuthenticated={setAuthenticated} />
                <span className="login-link text-gray-600 text-sm">
                    Already have an account? <Link to="/login">Login!</Link>
                </span>
            </div>
        </div>
    );
};

const SocialSignup = () => {
    return (
        <div className="social-signup">
            <a className="btn btn-block social-btn google mb-15 font-medium text-base" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google" className="h-8 float-left mt-2" /> Sign up with Google
            </a>
        </div>
    );
};

const SignupForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        provider: ''
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        setFormData((prevData) => ({
            ...prevData,
            [inputName]: inputValue
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const signUpRequest = { ...formData };

        signup(signUpRequest)
            .then(response => {
                toast.success("You're successfully registered. Please login to continue!");
                props.setAuthenticated(true);
                props.history.push("/login");
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <input
                    type="password"
                    name="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <button type="submit" onSubmit={handleSubmit} className="btn btn-block btn-primary">Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;
