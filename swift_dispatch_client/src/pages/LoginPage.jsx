import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
    };

    const handleGoogleAuth = () => {
        // Handle Google authentication logic here
    };

    return (
        <div className="p-8 md:p-10 lg:p-12 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-10">
                Login
            </h2>
            <div className="overflow-auto">
                <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="border-gray-300 bg-gray-200 w-full px-4 py-2 mb-2"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border-gray-300 bg-gray-200 w-full px-4 py-2 mb-2"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <button
                            type="submit"
                            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
                        >
                            Log In
                        </button>
                        <div className="flex flex-col md:col-span-2">
                            <GoogleLogin
                                clientId="YOUR_GOOGLE_CLIENT_ID"
                                buttonText="Sign in with Google"
                                // onSuccess={handleGoogleResponse}
                                // onFailure={handleGoogleResponse}
                                cookiePolicy="single_host_origin"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
