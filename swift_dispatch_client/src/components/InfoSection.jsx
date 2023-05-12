import React from 'react';
import truck_element from "../company_Icon/new/truck_element.png";

const benefits = [
    {
        title: "10% DISPATCH FEE",
        description: "We offer competitive dispatch fees so you can keep more money in your pocket.",
    },
    {
        title: "FULL SERVICE PACKAGE",
        description: "Our full service package includes dispatching, load planning, and negotiation for the best rates.",
    },
    {
        title: "DEDICATED DISPATCHER",
        description: "Our professional team of car hauler dispatchers will keep you loaded and on the road.",
    },
    {
        title: "OPTIMIZED ROUTES AND LANES",
        description: "We find the best paying enclosed loads and open carrier loads to keep your company making money.",
    },
];

const BenefitCard = ({ title, description }) => {
    return (
        <li className="relative bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <h3 className="text-gray-700 font-bold text-xl lg:text-2xl mb-2">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-800"></div>
        </li>
    );
};

const InfoSection = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <img src={truck_element} alt="Car" className="w-full max-w-xs mx-auto"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 md:pl-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Car Hauler Dispatch Service</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                             Swift Dispatch offers 🚚 Car Hauler Dispatch Services for CDL OTR Drivers in the 🚗 auto transport industry. Are you having a hard time finding the best paying loads? Do you feel like you just don’t have the time or resources to constantly be monitoring load boards? Don’t worry, we have your back! 😎 Our professional team of car hauler dispatchers will keep you loaded. We find the best paying enclosed loads and open carrier loads. 🤝 Our car hauler dispatchers keep you loaded and on the road so that the wheels are rolling and your company is making 💰!                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {benefits.map(benefit => (
                                <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
