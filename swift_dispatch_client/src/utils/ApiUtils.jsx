import {ACCESS_TOKEN, API_BASE_URL} from '../constants/';
import { toast } from "react-hot-toast";

const request = (options) => {
    const headers = new Headers({
        "Content-Type": "application/json",
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}
export function sendEmail(emailRequest) {
    return new Promise((resolve, reject) => {
        fetch(API_BASE_URL + "/send_email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailRequest),
        })
            .then((response) => {
                if (response.ok) {
                    toast.success('Thank you for contacting us. We will get back to you shortly.');
                } else {
                    response.text().then((errorMessage) => {
                        console.log(errorMessage)
                        toast.error( errorMessage);
                    });
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    });
}
