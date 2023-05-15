import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {sendEmail} from "../utils/ApiUtils";
import {toast} from "react-hot-toast";

const ContactCard = ({showExitButton, onClose}) => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [contact, setContact] = useState("");
        const [message, setMessage] = useState("");
        const [submitDisable, setSubmitDisable] = useState(true);

        const MAX_MESSAGE_LENGTH = 500;

        useEffect(() => {
            if (name === "" || email === "" || contact === "" || message === "") {
                setSubmitDisable(true);
            } else {
                setSubmitDisable(false);
            }
        }, [name, email, contact, message]);

        const handleNameChange = (event) => {
            setName(event.target.value);
        };

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handleContactChange = (value) => {
            setContact(value);
        };

        const handleMessageChange = (event) => {
            const newInputText = event.target.value;
            const remainingChars = MAX_MESSAGE_LENGTH - newInputText.length;

            if (remainingChars >= 0) {
                setMessage(newInputText);
            }
        };

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!isValidEmail(email)) {
                toast.error("Invalid email address");
            } else {
                const templateParams = {
                    clientName: name,
                    clientMessage: message,
                    clientContactNumber: contact,
                    clientEmail: email,
                };
                try {
                    await sendEmail(templateParams);
                    setName("");
                    setEmail("");
                    setContact("");
                    setMessage("");
                } catch (error) {
                    toast.error("An error occurred while sending your message.");
                }
            }
        };

        const isValidEmail = (email) => {
            const emailRegex =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(String(email).toLowerCase());
        };

        const handleClose = () => {
            onClose();
        };

        return (
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white rounded-lg shadow-md">
                {showExitButton && (
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
                )}
                <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block font-medium text-gray-700">
                            Contact Number
                        </label>
                        <PhoneInput
                            country={"us"}
                            value={contact}
                            onChange={handleContactChange}
                            inputProps={{
                                name: "contact",
                                id: "contact",
                                required: true,
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Enter your message"
                            maxLength={MAX_MESSAGE_LENGTH}
                            required
                        />
                        <p className="text-sm text-right text-gray-500">
                            {MAX_MESSAGE_LENGTH - message.length} characters left
                        </p>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className={`inline-flex justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${submitDisable ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                            disabled={submitDisable}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
            ;
    }
;

ContactCard.propTypes = {
    showExitButton: PropTypes.bool,
    onClose: PropTypes.func,
};

ContactCard.defaultProps = {
    showExitButton: true,
    onClose: () => {
    },
};

export default ContactCard;