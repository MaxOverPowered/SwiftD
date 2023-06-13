import {ACCESS_TOKEN, API_BASE_URL} from '../constants/';


const request = (options) => {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    if (sessionStorage.getItem(ACCESS_TOKEN)) {
        headers.append(
            "Authorization",
            "Bearer " + sessionStorage.getItem(ACCESS_TOKEN)
        );
    }
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

export function getUserId(username) {
    return request({
        url: API_BASE_URL + "/user?username=" + username,
        method: "GET",
    });
}


export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function getLogout() {
    document.cookie = ""; // Remove all cookies
    console.log("Cookies cleared");
    return request({
        url: API_BASE_URL + "/auth/logout",
        method: "GET",
    });
}

export function sendEmail(emailRequest) {
    return new Promise((resolve, reject) => {
        return fetch(API_BASE_URL + "/send_email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailRequest),
        });
    });
}


