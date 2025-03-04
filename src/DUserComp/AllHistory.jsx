import { useEffect, useState } from "react";

const AllHistory = () => {
    const [transaction, setTransaction] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state added

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await fetch(`https://revenger-server.vercel.app/api/v1/action/my-tran`, {
                    method: "GET",
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`,
                    },
                });
                const data = await res.json();
                setTransaction(data?.data);
            } catch (err) {
                console.error("Error fetching transactions:", err);
            } finally {
                setLoading(false); // Stop loading after fetch
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Transaction History</h1>
            {loading ? ( // Display spinner while loading
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full bg-white">
                        {/* Head */}
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-left text-gray-600">Sender</th>
                                <th className="py-3 px-4 text-left text-gray-600">Receiver</th>
                                <th className="py-3 px-4 text-left text-gray-600">Amount</th>
                                <th className="py-3 px-4 text-left text-gray-600">Fee</th>
                                <th className="py-3 px-4 text-left text-gray-600">Method</th>
                                <th className="py-3 px-4 text-left text-gray-600">Status</th>
                                <th className="py-3 px-4 text-left text-gray-600">TranId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction?.length ? (
                                transaction.map((tran) => (
                                    <tr key={tran?._id} className="hover:bg-gray-50">
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.senderId?.mobileNumber}</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.RMobileNumber}</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.amount} Taka</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.fee} Taka</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.method}</td>
                                        <td className={`py-3 px-4 border-b border-gray-200 ${tran?.paymentStatus ? 'text-green-600' : 'text-red-600'}`}>
                                            {tran?.paymentStatus ? "Success" : "Failed"}
                                        </td>
                                        <td className="py-3 px-4 border-b border-gray-200">{tran?.TranId}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="py-3 px-4 text-center text-gray-500">No transactions found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllHistory;
