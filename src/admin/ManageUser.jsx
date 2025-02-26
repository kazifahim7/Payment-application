import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const ManageUser = () => {
    const [users, setAllUser] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [signal,setSignal]=useState(false)
    const [query, setQuery] = useState("");
    console.log(query)

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/auth/all-user?searchTerm=${query}`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllUser(data?.data);

               
                const balance = data?.data?.reduce((sum, user) => sum + (user.balance || 0), 0);
                setTotalBalance(balance);
            });
    }, [signal, query]);


    // handle block user
    const blockUser =(id)=>{
        console.log(id)
        const ids = toast.loading("blocking....")
        fetch(`http://localhost:5000/api/v1/auth/blocked/${id}`, {
            method: "POST",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.data){
                    toast.success("success",{id:ids})
                    setSignal(true)
                }else{
                    toast.error("something went wrong", { id: ids })
                }


               
            });
    }
    const makeAgent =(id)=>{
        console.log(id)
        const ids = toast.loading("making....")
        fetch(`http://localhost:5000/api/v1/auth/make-agent/${id}`, {
            method: "POST",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.data){
                    toast.success("success",{id:ids})
                    setSignal(true)
                }else{
                    toast.error("something went wrong", { id: ids })
                }


               
            });
    }

    return (
        <div className="container mx-auto p-6">
            {/* Header with Total Balance */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold">Manage Users</h1>
                <p className="text-lg font-medium">Total Balance in system: <span className="font-bold">{totalBalance} Taka</span></p>
                <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md w-full max-w-md">
                    <FiSearch className="text-gray-500 text-lg mr-2" />
                    <input
                        type="text"
                        placeholder="Search by number..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 outline-none bg-transparent text-gray-700"
                    />
                </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto mt-6 bg-white shadow-lg rounded-lg">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    {/* Table Head */}
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-3 border border-gray-300">Name</th>
                            <th className="p-3 border border-gray-300">Number</th>
                            <th className="p-3 border border-gray-300">Amount</th>
                            <th className="p-3 border border-gray-300">Role</th>
                            <th className="p-3 border border-gray-300">Status</th>
                            <th className="p-3 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-3 border border-gray-300 "><Link className="underline" to={`/dashboard/detailsUser/${user.mobileNumber}`}>{user.name || "N/A"}</Link></td>
                                    
                                    <td className="p-3 border border-gray-300">{user.mobileNumber}</td>
                                    <td className="p-3 border border-gray-300">{user.balance || 0}</td>
                                    <td className="p-3 border border-gray-300">
                                        {user.approval ? user.role : "Pending Agent"}
                                    </td>
                                    <td className={`p-3 border border-gray-300 ${user.isBlocked ? "text-red-600" : "text-green-600"}`}>
                                        {user.isBlocked ? "Blocked" : "Active"}
                                    </td>
                                    <td className="p-3 border border-gray-300 space-x-2">
                                        <button onClick={() => blockUser(user._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                                            Block
                                        </button>
                                        {!user.approval && (
                                            <button onClick={() => makeAgent(user._id)} className="px-3 py-1 bg-green-600 text-white rounded">
                                                Make Agent
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
