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
import {useTranslation} from "react-i18next";
import Welcome from "./pages/Welcome";
import OAuth2RedirectHandler from './components/oauth2/OAuth2RedirectHandler';
import Alert from "react-s-alert";
import {getCurrentUser} from "./utils/ApiUtils";
import {ACCESS_TOKEN} from "./constants";
import NotFound from "./components/common/NotFound";
import Login from "./pages/LoginPage";
import PrivateRoute from "./components/common/PrivateRoute";
import Profile from "./user/Profile";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie] = useCookies(["user", "language"]);
    const [language, setLanguage] = useState(cookies.language || "en");
    const {t, i18n} = useTranslation();

    const handleLanguageSwitch = () => {
        const newLanguage = i18n.language === "en" ? "ru" : "en";
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
        if (cookies.userAcceptedCookies) {
            setCookie("language", newLanguage, {path: "/"});
        }
    };


    const loadCurrentlyLoggedInUser = () => {
        getCurrentUser()
            .then(response => {
                setCurrentUser(response);
                setAuthenticated(true);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false);
        setCurrentUser(null);
        Alert.success("You're safely logged out!");
    };

    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener("online", handleOnlineStatus);
        window.addEventListener("offline", handleOnlineStatus);
        i18n.changeLanguage(language);
        setLanguage(language);
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        loadCurrentlyLoggedInUser();

        return () => {
            window.removeEventListener("online", handleOnlineStatus);
            window.removeEventListener("offline", handleOnlineStatus);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div>
            {isOnline && isLoading === false ? (
                <div className="flex flex-col min-h-screen">
                    <CookieConsent setCookie={setCookie} cookies={cookies}/>
                    <Navbar
                        className="fixed w-full top-0 z-10"
                        handleLanguageSwitch={handleLanguageSwitch}
                        language={language}
                    />
                    <div className="pt-20 flex-grow  lg:w12">
                        <ToasterProvider/>
                        <Routes className="sm:px-6 md:px-8 lg:px-10 z-10">
                            <Route path="/" element={<Home/>}/>
                            <Route
                                path="/profile"
                                element={
                                    <PrivateRoute
                                        authenticated={authenticated}
                                        currentUser={currentUser}
                                        component={Profile}
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={<Login authenticated={authenticated}/>}
                            />

                            {/*<Route*/}
                            {/*    path="/signup"*/}
                            {/*    render={props => <Signup authenticated={authenticated} {...props} />}*/}
                            {/*/>*/}
                            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                            <Route component={NotFound}/>
                            <Route path="/welcome" element={<Welcome/>}/>
                            <Route path="/signUp" element={<Registration/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            <Route path="/contact" element={<ContactUs/>}/>
                            <Route path="/services" element={<Services/>}/>
                        </Routes>
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
