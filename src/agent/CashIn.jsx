import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const CashRequestAgent = () => {
    const [requests, setRequest] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false)

  


    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/request/request`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => setRequest(data?.data))
            .catch(err => console.error("Error fetching requests:", err));
    }, [success]);

    const handleCashInClick = (request) => {
        setSelectedRequest(request);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        reset();
    };

    const onSubmit = async (data) => {

        const modifiedData = {
            RMobileNumber: selectedRequest?.customerNumber,
            amount: Number(selectedRequest?.amount),
            pin: data?.pin
        }
        console.log(modifiedData)
        const id = toast.loading("loading...")

        try {
            const res = await fetch("http://localhost:5000/api/v1/action/cash-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem('token')}`
                },
                body: JSON.stringify(modifiedData)

            })
            const result = await res.json()


            if (result.success) {
                toast.success(result.message, { id })
                handleCloseModal();
                setSuccess(true)

                reset()

            }
            else {
                toast.success(result.message, { id })
            }




        } catch (error) {
            toast.error(error.message)
        }



        // Handle the cash-in transaction here

    };

    return (
        <div className="container mx-auto p-6">
            <div>
                <h1 className="text-2xl font-bold mb-6">Cash Requests</h1>
            </div>
            <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full bg-white">
                    {/* Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-600">Customer Number</th>
                            <th className="py-3 px-4 text-left text-gray-600">Amount</th>
                            <th className="py-3 px-4 text-left text-gray-600">Status</th>
                            <th className="py-3 px-4 text-left text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request._id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 border-b border-gray-200">{request.customerNumber}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{request.amount} Taka</td>
                                    <td className={`py-3 px-4 border-b border-gray-200 ${request.complete ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {request.complete ? "Success" : "Pending"}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        <button
                                            disabled={request.complete}
                                            className="btn text-blue-600 hover:underline"
                                            onClick={() => handleCashInClick(request)}
                                        >
                                            Cash In
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">No cash requests found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Cash In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-gray-700">PIN</label>
                                <input
                                    type="password"
                                    {...register("pin", { required: "PIN is required" })}
                                    className="mt-1 block w-full border rounded-md p-2"
                                />
                                {errors.pin && <p className="text-red-600">{errors.pin.message}</p>}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 text-gray-500"
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-4 rounded"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CashRequestAgent;
