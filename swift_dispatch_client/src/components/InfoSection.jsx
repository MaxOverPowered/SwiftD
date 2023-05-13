import React from 'react';
import { useTranslation } from 'react-i18next';
import truckIcon from '../company_Icon/new/truck_element.png';
import './language/resurse';

const Benefits = () => {
    const { t, i18n } = useTranslation();

    const benefits = [
        {
            title: t('benefits.title1'),
            description: t('benefits.description1')
        },
        {
            title: t('benefits.title2'),
            description: t('benefits.description2')
        },
        {
            title: t('benefits.title3'),
            description: t('benefits.description3')
        },
        {
            title: t('benefits.title4'),
            description: t('benefits.description4')
        }
    ];

    const companyDescription = [
        {
            title: t('infoSection.title'),
            description: t('infoSection.description'),
            buttonText: t('infoSection.buttonText')
        }
    ];

    const switchLanguage = () => {
        const lang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(lang);
    }

    return (
        <div className="flex flex-col lg:flex-row items-center py-16">
            <div className="lg:w-1/3">
                <img src={truckIcon} alt="Truck" className="w-full max-w-sm mx-auto lg:mx-0" />
            </div>
            <div className="lg:w-2/3 lg:pl-16">
                <h2 className="text-l font-bold text-gray-900 mb-4">{companyDescription.map(element => (
                    <div key={element.title}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{element.title}</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">{element.description}</p>
                    </div>
                ))}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map(benefit => (
                        <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
                    ))}
                </ul>
                <button onClick={switchLanguage} className="mt-8 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                    {i18n.language === 'en' ? 'Switch to Russian' : 'Switch to English'}
                </button>
            </div>
        </div>
    );
}

const BenefitCard = ({ title, description }) => {
    return (
        <li className="relative bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <h3 className="text-gray-700 font-bold text-lg lg:text-xl mb-2">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </li>
    );
};

const InfoSection = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Benefits />
            </div>
        </section>
    );
}

export default InfoSection;