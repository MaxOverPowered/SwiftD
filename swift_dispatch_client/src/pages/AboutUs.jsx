import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="py-10">
                <h1 className="text-3xl font-bold mb-5">About Us</h1>
                <p className="text-lg mb-5">
                    Swift_Dispatch is a car hauling dispatch service that has been in business for over 2 years. Our goal is to provide the best possible rates on the route while maintaining good communication with our clients. We believe in keeping our company healthy, and we always strive to provide top-notch customer service.
                </p>
                <h2 className="text-2xl font-bold mb-3">Our Services</h2>
                <ul className="list-disc list-inside mb-5">
                    <li>Car hauling dispatch service</li>
                    <li>First load on us 😊</li>
                    <li>Best possible rates on the route 💰</li>
                    <li>Good Communication 📞</li>
                    <li>Keep company healthy🌟</li>
                    <li>Appointment at pickup and delivery 📅</li>
                </ul>
                <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                <p className="text-lg mb-5">If you have any questions or would like to use our services, please contact us:</p>
                <ul className="list-disc list-inside">
                    <li>Billing & Accounting: from $149</li>
                    <li>Documentation: Submitting the necessary documents to the broker/factoring company to receive payment for the shipments. Resolving issues that may result from delayed payment reception. Tracking the receipt of payments</li>
                    <li>Logbook: from $199</li>
                    <li>Route optimization: We've successfully managed to ensure compliance with HOS regulations for years, even before drivers used electronic logs. Trust our expert team to ensure your drivers always follow the rules.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
