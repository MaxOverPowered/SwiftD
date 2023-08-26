/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    resolve: {
        fallback: {
            querystring: require.resolve('querystring-es3')
        }
    }
    ,
    theme: {
        extend: {
            transitionDuration: {
                0: "0ms",
                2000: "2000ms",
            },
        },
        plugins: [require("tailwind-scrollbar-hide")],
    },
};