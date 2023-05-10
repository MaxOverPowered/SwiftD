import React from "react";
import {Card} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";
import caHaulerImage from "../company_Icon/new/1.png";
import accountingImage from "../company_Icon/new/4.png";
import logImage from "../company_Icon/new/3.png";
import {motion} from "framer-motion";


const services = [
    {
        title: "Car hauling dispatch service",
        price: " %",
        features: [
            "First load on us 😊",
            "2+ years dispatch🎧",
            "Best possible rates on the route  💰",
            "Good Communication 📞",
            "Keep company healthy🌟",
            "Appointment at pickup and delivery 📅",
        ],
        backgroundImage: caHaulerImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
    {
        title: "Billing & Accounting",
        price: "from " + 149+ " $",
        features: [
            "Documentation",
            "Submitting the necessary documents to the broker/factoring company to receive payment for the shipments.",
            "Resolving issues that may result from delayed payment reception.",
            "Tracking the receipt of payments",
        ],
        backgroundImage: accountingImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
    {
        title: "Logbook",
        price: "from " + 199+" $",
        features: [
            "Route optimization",
            "We've successfully managed to ensure compliance with HOS regulations for years, even before drivers used electronic logs. Trust our expert team to ensure your drivers always follow the latest HOS rules.",
        ],
        backgroundImage: logImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
];

const ServiceCard = ({service}) => {
    return (
        <Card className="flex flex-col justify-between h-full"
              style={{backgroundImage: `url(${service.backgroundImage})`, backgroundSize: service.backgroundSize, backgroundPosition: 'center'}}>
            <div>
                <div className="bg-green-800 text-white py-2 px-4 rounded-t-lg">
                    <h3 className="text-lg font-bold h-12 flex items-center justify-between">
                        <span>{service.title}</span>
                        <span className="text-sm">{service.price}</span>
                    </h3>
                </div>
                <ul className="text-gray-700 p-4 flex-1">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start mb-2">
                            <FaCheck className="mr-2 mt-1 text-green-500 text-xl flex-shrink-0" />
                            <span className="align-self-start">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-green-800 py-4 px-4 rounded-b-lg">
                <button >
                    {/*<FiShoppingCart className="mr-2"/>*/}
                    {/*Add to Cart*/}
                    <motion.button
                        className="bg-white py-3 px-6 rounded-full text-lg font-bold text-gray-900 hover:bg-gray-300 hover:text-gray-900 transition-opacity duration-300 ease-in-out opacity-80"
                        // onClick={handleContactClick}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        style={{ opacity: 0.8 }}
                        data-scroll
                    >
                        Contact Us
                    </motion.button>
                </button>
            </div>
        </Card>
    );
};

const ServicePage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="flex flex-wrap -mx-4">
                {services.map((service, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
                        <ServiceCard service={service}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;