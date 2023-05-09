import React from "react";
import { Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


const services = [
    {
        title: "Car hauling dispatch service",
        price: " %per Gross",
        features: [
            "First load on us 😊",
            "2+ years dispatch🎧",
            "Best possible rates on the route  💰",
            "Good Communication 📞",
            "Keep company healthy🌟",
            "Appointment at pickup and delivery 📅",
        ],
    },
    {
        title: "Billing & Accounting",
        price: 149,
        features: [
            "Documentation",
            "Submitting the necessary documents to the broker/factoring company to receive payment for the shipments.",
            "Resolving issues that may result from delayed payment reception.",
            "Tracking the receipt of payments",
        ],
    },
    {
        title: "Logbook",
        price: "form " + 199,
        features: [
            "Route optimization",
            "We've successfully managed to ensure compliance with HOS regulations for years, even before drivers used electronic logs. Trust our expert team to ensure your drivers always follow the latest HOS rules.",
        ],
    },
];

const ServiceCard = ({ service }) => {
    return (
        <Card className="flex flex-col justify-between h-full">
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
                            <FaCheck className="mr-2 mt-1 text-green-500 text-xl h-5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
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
                        <ServiceCard service={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
