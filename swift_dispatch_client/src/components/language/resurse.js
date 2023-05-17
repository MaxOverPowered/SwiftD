import i18n from 'i18next';
import caHaulerImage from "../../company_Icon/new/1.png";
import accountingImage from "../../company_Icon/new/4.png";
import logImage from "../../company_Icon/new/3.png";
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            benefits: {
                title1: '10% DISPATCH FEE',
                description1: 'We offer competitive dispatch fees so you can keep more money in your pocket.',
                title2: 'FULL SERVICE PACKAGE',
                description2: 'Our full service package includes dispatching, load planning, and negotiation for the best rates.',
                title3: 'DEDICATED DISPATCHER',
                description3: 'Our professional team of car hauler dispatchers will keep you loaded and on the road.',
                title4: 'OPTIMIZED ROUTES AND LANES',
                description4: 'We find the best paying enclosed loads and open carrier loads to keep your company making money.',
            },
            infoSection: {
                title: 'Car Hauler Dispatch Service',
                description: 'Swift Dispatch offers 🚚 Car Hauler Dispatch Services for CDL OTR Drivers in the 🚗 auto transport industry. Are you having a hard time finding the best paying loads? Do you feel like you just don’t have the time or resources to constantly be monitoring load boards? Don’t worry, we have your back! 😎 Our professional team of car hauler dispatchers will keep you loaded. We find the best paying enclosed loads and open carrier loads. 🤝 Our car hauler dispatchers keep you loaded and on the road so that the wheels are rolling and your company is making 💰!',
                buttonText: 'Switch to Russian',
            },
            navbar: {
                aboutUs: 'About us',
                contactUs: 'Contact us',
                services: 'Services'
            },
            applyNowSection: {
                needDispatch: 'DO YOU NEED DISPATCHING?',
                rightPlace: 'You have come to the right place!',
                text1: ' We can help you find amazing loads and good routes, fully\n' +
                    '            coordinating the carrier’s movement from point A to point B.',
                text2: ' Let’s get along and make money together!'
            },
            contactUsCard: {
                name: 'name',
                getInTouch: 'Get in Touch',
                email: 'email',
                contactNumber: 'Contact Number',
                message: 'message',
                submitButton: 'Submit',
                characterLeft: 'Character left',
                enterYourMessage: 'Enter your message',
                enterYourEmailAddress: 'Enter your email address',
                enterYourName: 'Enter your name',
            }
        },
    },
    ru: {
        translation: {
            benefits: {
                title1: '10% ОТЧИСЛЕНИЕ ЗА ДИСПЕТЧИНГ',
                description1: 'Мы предлагаем конкурентные отчисления за диспетчинг, чтобы вы могли оставлять больше денег в своем кармане.',
                title2: 'ПОЛНЫЙ ПАКЕТ УСЛУГ',
                description2: 'Наш полный пакет услуг включает диспетчинг, планирование загрузок и переговоры для лучших тарифов.',
                title3: 'ОТДЕЛЬНЫЙ ДИСПЕТЧЕР',
                description3: 'Наша профессиональная команда диспетчеров автомобильных перевозок поддержит вас в загрузке и на дороге.',
                title4: 'ОПТИМИЗИРОВАННЫЕ МАРШРУТЫ И ПОЛОСЫ',
                description4: 'Мы находим лучшие оплачиваемые перевозки в закрытых контейнерах и открытых перевозчиках, чтобы ваша компания зарабатывала деньги.',
            },
            infoSection: {
                title: 'Сервис диспетчеризации автоперевозок',
                description: 'Swift Dispatch предлагает 🚚 сервис диспетчеризации автоперевозок для водител  оров CDL OTR в 🚗 отрасли автоперевозок. У вас возникают трудности с поиском лучших оплачиваемых перевозок? Чувствуете, что у вас просто нет времени или ресурсов, чтобы постоянно следить за досками объявлений? Не волнуйтесь, мы всегда рядом! 😎 Наша профессиональная команда диспетчеров автоперевозок поддержит вас в загрузке. Мы находим лучшие оплачиваемые перевозки в закрытых контейнерах и открытых перевозчиках. 🤝 Наши диспетчеры для автоперевозок поддержат вас в загрузке и на дороге, чтобы колеса крутились, а ваша компания зарабатывала 💰!',
                buttonText: 'Переключить на английский',
            },
            navbar: {
                aboutUs: 'О нас',
                contactUs: 'Связаться с нами',
                services: 'Услуги'
            },
            applyNowSection: {
                needDispatch: 'ВАМ НУЖНА ОТПРАВКА?',
                rightPlace: 'Вы обратились по адресу!',
                text1: 'Мы можем помочь вам найти потрясающие грузы и хорошие маршруты, полностью\n' +
                    ' координируя передвижение перевозчика от точки А до точки Б.',
                text2: ' Давайте работать вместе и зарабатывать деньги!',
                contactUs: 'Связаться с нами'
            },
            contactUsCard : {
                name: 'Имя',
                getInTouch: 'Свяжитесь с нами',
                email: 'Электронная почта',
                contactNumber: 'Контактный номер',
                message: 'Сообщение',
                submitButton: 'Отправить',
                characterLeft: 'Осталось символов',
                enterYourMessage: 'Введите ваше сообщение',
                enterYourEmailAddress: 'Введите ваш адрес электронной почты',
                enterYourName: 'Введите ваше имя'
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
