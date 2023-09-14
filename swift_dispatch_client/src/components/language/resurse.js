import i18n from 'i18next';
import caHaulerImage from "../../company_Icon/new/1.png";
import accountingImage from "../../company_Icon/new/4.png";
import logImage from "../../company_Icon/new/3.png";
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            benefits: {
                title1: 'COMPETITIVE PRICING',
                description1: 'Our price points are selected based on the quality of our services, taking into account the prices in this niche.',
                title2: 'PROFESSIONAL TEAM',
                description2: 'We gathered a team of dedicated dispatchers, with a good experience in this industry.',
                title3: 'CUSTOMER SUPPORT',
                description3: 'We’re always ready to provide help and make sure customers are successful in solving whatever issues they encounter. \n',
                title4: 'FULL SERVICE PACK',
                description4: 'We offer a package, with all the needed services: dispatch, route planning, setups, accounting and logbook.',
            },
            infoSection: {
                title: 'Car Hauler Dispatch Service\n',
                description: `Are you having a hard time finding the best paying loads?
                 Do you feel like you just don’t have the time or resources to constantly be monitoring load boards?
                            Don’t worry, we have your back!
                            Our professional team of dispatchers will keep you loaded. 
                            We work hard to keep you on the road, the wheels rolling and your company making good money!
                            Count on us for professionalism in the auto transport industry!`,

                buttonText: 'Switch to Russian',
            },
            navbar: {
                aboutUs: 'About us',
                contactUs: 'Contact us',
                services: 'Services'
            },
            applyNowSection: {
                needDispatch: 'DO YOU NEED DISPATCHING?',
                rightPlace: 'Check our offers, down below!\n',
                text1: ' We can help you find amazing loads and good routes, fully\n' +
                    '            coordinating the movement \n from point A to point B.',
                text2: ' Let’s make money together!'
            },
            contactUsCard: {
                name: 'Name',
                getInTouch: 'Get in Touch',
                email: 'Email',
                contactNumber: 'Contact Number',
                message: 'Message',
                submitButton: 'Submit',
                characterLeft: 'Character left',
                enterYourMessage: 'Enter your message',
                enterYourEmailAddress: 'Enter your email address',
                enterYourName: 'Enter your name',
                enterYourContact: 'Enter your phone number',
                enterMessageInfo: "Please leave some details about your company here, for example, how many drivers you have," +
                    " whether you're interested in collaborating with us, or if you`d like to learn about our benefits."

            },
            aboutUs: {
                description: 'SWIFT Dispatch is more than just a logistics company.' +
                    'It is a team of passionate car-hauling experts who love being part of a carrier’s road to success.' +
                    'With over 3 years of experience in the industry,' +
                    'we know the United States of America like the back of our hand,' +
                    'and we pride ourselves on our ability to efficiently and ' +
                    'effectively dispatch our drivers to their destinations.'
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
            contactUsCard: {
                name: 'Имя',
                getInTouch: 'Свяжитесь с нами',
                email: 'Электронная почта',
                contactNumber: 'Контактный номер',
                message: 'Сообщение',
                submitButton: 'Отправить',
                characterLeft: 'Осталось символов',
                enterYourMessage: 'Введите ваше сообщение',
                enterYourEmailAddress: 'Введите ваш адрес электронной почты',
                enterYourName: 'Введите ваше имя',
                enterYourContact: 'Введите свой номер телефона',
                enterMessageInfo: "Пожалуйста, оставьте здесь некоторые сведения о вашей компании, например, сколько у вас водителей, заинтересованы ли вы в сотрудничестве с нами или хотели бы узнать о наших преимуществах."


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
