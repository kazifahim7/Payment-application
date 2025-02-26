import { useEffect, useState } from "react";

const CashRequest = () => {
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch(`https://revenger-server.vercel.app/api/v1/request/myRequest`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => setRequest(data?.data))
            .catch(err => console.error("Error fetching requests:", err));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Cash Requests</h1>
            <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full bg-white">
                    {/* Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-600">Agent Number</th>
                            <th className="py-3 px-4 text-left text-gray-600">Amount</th>
                            <th className="py-3 px-4 text-left text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 border-b border-gray-200">{request.requestNumber}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{request.amount} Taka</td>
                                    <td className={`py-3 px-4 border-b border-gray-200 ${request.complete ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {request.complete ? "Success" : "Pending"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="py-3 px-4 text-center text-gray-500">No cash requests found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashRequest;
