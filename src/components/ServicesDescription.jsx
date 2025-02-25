const MobileBankingServices = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                    {services.map((service, index) => (
                        <div key={index}>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className={service.bgColor} width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                                </svg>
                                <svg className={`absolute ${service.iconColor} w-9 h-9`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.iconPath} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">{service.title}</h3>
                            <p className="mt-4 text-base text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const services = [
    {
        title: "Secure Transactions",
        description: "Ensure your payments are safe with advanced encryption and fraud protection.",
        bgColor: "text-blue-100",
        iconColor: "text-blue-600",
        iconPath: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
    },
    {
        title: "Instant Money Transfer",
        description: "Send and receive money instantly with just a few taps on your phone.",
        bgColor: "text-orange-100",
        iconColor: "text-orange-600",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Bill Payments",
        description: "Easily pay your utility, internet, and mobile bills without hassle.",
        bgColor: "text-green-100",
        iconColor: "text-green-600",
        iconPath: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    },
    {
        title: "24/7 Customer Support",
        description: "Get assistance anytime with our dedicated support team available round the clock.",
        bgColor: "text-purple-100",
        iconColor: "text-purple-600",
        iconPath: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    },
    {
        title: "Mobile Recharge",
        description: "Recharge your mobile number instantly with various payment options.",
        bgColor: "text-gray-100",
        iconColor: "text-gray-600",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Rewards & Cashback",
        description: "Enjoy exclusive offers, discounts, and cashback on your transactions.",
        bgColor: "text-yellow-100",
        iconColor: "text-yellow-500",
        iconPath: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
    }
];

export default MobileBankingServices;
