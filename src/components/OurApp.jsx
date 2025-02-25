import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileBankingDownload = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <FaCloudDownloadAlt className="mx-auto w-14 h-14 text-black" />
                    <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Secure Mobile Banking
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Experience fast, secure, and convenient banking from your mobile device. Manage your finances anytime, anywhere.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white"
                    >
                        <FaApple className="w-6 h-6 mr-2" />
                        Download for iOS
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white"
                    >
                        <FaGooglePlay className="w-6 h-6 mr-2" />
                        Download for Android
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MobileBankingDownload;
