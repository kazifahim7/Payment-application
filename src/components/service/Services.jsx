import { FaMoneyBillWave, FaWallet, FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Ensure you're using React Router

const Services = () => {
    const services = [
        {
            title: "Send Money",
            description: "Instant and secure money transfers anytime, anywhere.",
            icon: <FaExchangeAlt className="text-blue-500 text-5xl" />,
            link: "/send-money",
        },
        {
            title: "Cash Out",
            description: "Withdraw money from your account quickly and safely.",
            icon: <FaMoneyBillWave className="text-green-500 text-5xl" />,
            link: "/cash-out",
        },
        {
            title: "Cash In",
            description: "Deposit money into your account with ease and security.",
            icon: <FaWallet className="text-yellow-500 text-5xl" />,
            link: "/cash-in",
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
                    Our Services
                </h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Fast, secure, and reliable financial solutions at your fingertips.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 text-center">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                {service.description}
                            </p>
                            <div className="mt-4 flex justify-center">
                                <span className="text-blue-600 font-semibold group-hover:underline">
                                    {service.title} →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
