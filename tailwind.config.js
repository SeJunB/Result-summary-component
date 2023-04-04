/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'background-gradient-top': 'hsl(252, 100%, 67%)',
                'background-gradient-bottom': 'hsl(241, 81%, 54%)',
                'circle-gradient-top': 'hsla(256, 72%, 46%, 1)',
                'circle-gradient-bottom': 'hsla(241, 72%, 46%, 0)',
                'light-red': 'hsla(0, 100%, 67%, 7%)',
                'dark-red': 'hsl(0, 100%, 67%)',
                'light-orange-yellow': 'hsla(39, 100%, 56%, 9%)',
                'orange-yellow': 'hsl(39, 100%, 56%)',
                'light-green-teal': 'hsla(166,100%, 37%, 9%)',
                'green-teal': 'hsl(166,100%, 37%)',
                'light-cobalt-blue': 'hsla(234, 85%, 45%, 9%)',
                'cobalt-blue': 'hsl(234, 85%, 45%)',
                'dark-gray-blue':'hsl(224,30%, 27%)',
                'subtext': '#d6d2d2'
            },
            fontFamily: {
                libre: ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
};
