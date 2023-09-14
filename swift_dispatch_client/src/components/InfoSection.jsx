import React from "react";
import {useTranslation} from "react-i18next";
import truckIcon from "../company_Icon/new/truck_element.png";
import "./language/resurse";
// import IGEmbed from 'react-instagram-embed';


const Benefits = () => {
    const {t, i18n} = useTranslation();

    const benefits = [
        {
            title: t("benefits.title1"),
        description: t("benefits.description1"),
        },
        {
            title: t("benefits.title2"),
            description: t("benefits.description2"),
        },
        {
            title: t("benefits.title3"),
            description: t("benefits.description3"),
        },
        {
            title: t("benefits.title4"),
            description: t("benefits.description4"),
        },
    ];

    const switchLanguage = () => {
        const lang = i18n.language === "en" ? "ru" : "en";
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex justify-center lg:flex-row items-center py-16">
            <div className="lg:w-2/3 lg:pl-16 flex flex-col text-center items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {t("infoSection.title")}<br/><br/>
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6"  style={{ whiteSpace: 'pre-line' }}>
                        {t("infoSection.description")}
                    </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
};

const BenefitCard = ({title, description}) => {
    return (
        <li className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <h3 className="text-gray-700 font-bold text-xl mb-2">
                {title}
            </h3>
            <p className="text-gray-700 leading-relaxed overflow-hidden max-h-32 md:max-h-40 lg:max-h-32">
                {description}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1"></div>
        </li>
    );
};

const InfoSection = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Benefits/>
            </div>
        </section>
    );
};

export default InfoSection;
