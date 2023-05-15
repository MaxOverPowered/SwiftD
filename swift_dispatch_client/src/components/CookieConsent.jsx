import React, {useEffect, useState} from "react";

function CookieConsent({setCookie, cookies}) {
    const [showCookieConsent, setShowCookieConsent] = useState(!cookies.userAcceptedCookies);

    const acceptCookies = () => {
        setCookie("userAcceptedCookies", true, {expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)});
        setShowCookieConsent(false);
    };

    const handleCookie = () => {
        if (cookies.userAcceptedCookies) {
            const expirationDate = new Date(cookies.userAcceptedCookies.expires);
            if (expirationDate > new Date()) {
                setShowCookieConsent(false);
            } else {
                setShowCookieConsent(true);
            }
        } else {
            setShowCookieConsent(true);
        }
    };

    useEffect(() => {
        handleCookie();
    }, []);

    return (
        <>
            {showCookieConsent && (
                <div className="bg-gray-800 py-2 text-sm text-center fixed bottom-0 w-full">
                    <div className="container mx-auto">
                        <span className="text-white mr-2">We use cookies to improve your browsing experience.</span>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" onClick={acceptCookies}>Accept</button>
                    </div>
                </div>
            )}
        </>
    );
}


export default CookieConsent;
