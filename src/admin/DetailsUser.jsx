import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsUser = () => {
    const { id } = useParams()
    const [data,setData]=useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/action/all-tran/${id}`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });
    }, [id]);
    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Transaction History</h1>
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
                            {data?.length ? (
                                data.map((tran) => (
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
            </div>
        </div>
    );
};

export default DetailsUser;