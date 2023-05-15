import React, {useState, useEffect} from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import logo from "../src/company_Icon/new/text_element.png";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import {ToasterProvider} from "./components/ToasterProvider";
import {useCookies} from "react-cookie";
import CookieConsent from "./components/CookieConsent";

function App() {
    const [isOnline, setIsOnline] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie] = useCookies(["user"]);

    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine);

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div>
            {isOnline && isLoading === false ? (
                <div className="flex flex-col min-h-screen">
                    <CookieConsent setCookie={setCookie} cookies={cookies}/>
                    <Navbar className="fixed w-full top-0 z-10"/>
                    <div className="pt-20 flex-grow  lg:w12">
                        <ToasterProvider/>
                        <Routes className="sm:px-6 md:px-8 lg:px-10 z-10">
                            <Route path="/" element={<Home/>}/>
                            <Route path="/signUp" element={<Registration/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            <Route path="/contact" element={<ContactUs/>}/>
                            <Route path="/services" element={<Services/>}/>
                        </Routes>
                    </div>
                    <div className="App">
                        <h1>React cookies</h1>
                        {cookies.user && <p>{cookies.user}</p>}
                        <button onClick={() => setCookie("user", "gowtham", {path: "/"})}>Set Cookie</button>
                    </div>
                    <Footer className="py-4"/>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    );
}

export default App;