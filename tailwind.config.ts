import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'sandrift': {
                '50': '#f5f3f1',
                '100': '#e6e1db',
                '200': '#cfc4b9',
                '300': '#b3a191',
                '400': '#9d8472',
                '500': '#8e7464',
                '600': '#7a6054',
                '700': '#624c46',
                '800': '#55413e',
                '900': '#4a3b39',
                '950': '#2a1e1e',
            },
            'wheat': {
                '50': '#fcf8f0',
                '100': '#f9eedc',
                '200': '#f1dbb7',
                '300': '#e8c289',
                '400': '#dda05a',
                '500': '#d68639',
                '600': '#c8702e',
                '700': '#a65828',
                '800': '#854727',
                '900': '#6c3b22',
                '950': '#3a1d10',
            },
            'eastern-blue': {
                '50': '#f1fafa',
                '100': '#daf0f3',
                '200': '#bae1e7',
                '300': '#8acad6',
                '400': '#53abbd',
                '500': '#378fa3',
                '600': '#30748a',
                '700': '#2d5f71',
                '800': '#2c505e',
                '900': '#284451',
                '950': '#162c36',
            },
            'avocado': {
                '50': '#f5f6ef',
                '100': '#e8ebdc',
                '200': '#d2d8be',
                '300': '#b5bf97',
                '400': '#9aa774',
                '500': '#7d8b57',
                '600': '#616d43',
                '700': '#4c5536',
                '800': '#3e452f',
                '900': '#363d2b',
                '950': '#1b1f14',
            },
        },
        fontFamily: {
            display: 'Major Mono Display, monospace',
            proplayas: ["'ADAM.CG PRO'", 'sans-serif'],
            body: 'Fauna One, serif',
            label: 'Manrope, sans-serif',
            heading: 'Playfair Display, serif',
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            backgroundImage: {
                'turtle': 'url("/assets/tortuga.jpg")'
            }
        },
    },
    plugins: [],
};
export default config;
