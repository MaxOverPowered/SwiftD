import React, {useEffect, useState} from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {sendEmail} from "../utils/ApiUtils";
import {notification} from "antd";


const ContactCard = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [charCount, setCharCount] = useState(500);
    const [submitDisable, setSubmitDisable] = useState(true);


    function handleMessageChange(event) {
        const newInputText = event.target.value;
        const remainingChars = 500 - newInputText.length;
        if (remainingChars >= 0) {
            setCharCount(remainingChars);
            setMessage(newInputText);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContactChange = (value) => {
        setContact(value);
    };

    useEffect(() => {
        if (name === "" || email === "" || contact === "" || message === "") {
            setSubmitDisable(true)
        } else {
            setSubmitDisable(false)
            // props.onClose();
        }

    }, [name, email, contact, message])
    const handleClose = () => {
        props.onClose();
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            notification.error({description: 'Invalid Email'}
            );
        } else {
            const templateParams = {
                clientName: name,
                clientMessage: message,
                clientContactNumber: contact,
                clientEmail: email
            };
            sendEmail(templateParams).then(response => {
                setName("");
                setEmail("");
                setContact("");
                setMessage("");
            })
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }

    return (
        <div class="p-8 md:p-10 lg:p-12 bg-white rounded-lg shadow-md">
            <div className="relative h-32 w-full">
                <div className="absolute left-0 top-0 h-16 w-16">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-6">
                        Contact Us
                    </h2></div>
                <div className="absolute top-0 right-0 h-16 w-16">
                    <button
                        className="absolute top-0 right-0 p-2 focus:outline-none"
                        onClick={handleClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 hover:text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <form class="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div class="flex flex-col">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleNameChange}
                        class="border-gray-300 bg-gray-100 w-full px-4 py-2 mb-2"
                        placeholder="Name"
                    />
                </div>
                <div class="flex flex-col">
                    <input
                        id="email"
                        name="email"
                        onChange={handleEmailChange}
                        class="border-gray-300 bg-gray-200 w-full px-4 py-2 mb-2"
                        placeholder="Email"
                    />
                </div>
                <div class="flex flex-col">
                    <div class="relative">
                        <PhoneInput className="border-gray-300  w-full px-10"
                                    country={'us'}
                                    value={contact}
                                    onChange={handleContactChange}
                                    inputProps={{
                                        name: 'contact',
                                        required: true,
                                        placeholder: 'Enter your phone number',
                                        className: ' border-gray-300 bg-gray-100  w-full px-11 py-2',
                                    }}
                        /></div>
                </div>
                <div class="flex flex-col">
                    <label
                        for="message"
                        class="text-green-900 font-medium mb-2"

                    >
                        Message
                    </label>
                    <textarea
                        className="border-gray-300 bg-gray-200 w-full px-4 py-2 rounded-md h-full"
                        maxLength={500}
                        rows={11}
                        cols={50}
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Please leave some details about your company here, for example, how many drivers you have, whether you're interested in collaborating with us, or if you'd like to learn about our benefits."

                    />
                    <p className="text-right text-sm text-gray-500">
                        {message.length}/500 characters
                    </p>
                </div>
                <div className="flex flex-col md:col-span-2">
                    <button
                        disabled={submitDisable}
                        type="submit"
                        className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ContactCard;