// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: '390px',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
                '2xl': '1920px',
            },
        },
    },
    plugins: [],
}
