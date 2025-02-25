const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</h2>
            <p className="text-gray-600 mt-2">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
