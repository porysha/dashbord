module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Vazirmatn: ["Vazirmatn"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
