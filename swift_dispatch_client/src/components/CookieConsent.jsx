import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

function CookieConsent({setCookie, cookies}) {
    const [showCookieConsent, setShowCookieConsent] = useState(!cookies.userAcceptedCookies);
    const {t, i18n} = useTranslation();


    const acceptCookies = () => {
        setCookie("userAcceptedCookies", true, {expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)});
        setCookie("language", i18n.language === 'en' ? 'ru' : 'en', {path: "/"});
        setShowCookieConsent(false);
    };
    const rejectCookies = () => {
        setCookie("userAcceptedCookies", false, {expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)});
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }

        setShowCookieConsent(false);
    };

    const handleCookie = () => {
        if (cookies.userAcceptedCookies) {
            const expirationDate = new Date(cookies.userAcceptedCookies.expires);
            if (expirationDate > new Date()) {
                setShowCookieConsent(false);
            } else {
                setShowCookieConsent(false);
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
                        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                                onClick={acceptCookies}>Accept
                        </button>
                        <button
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                            onClick={rejectCookies}
                        >
                            Reject
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}


export default CookieConsent;
