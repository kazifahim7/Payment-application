import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ManageProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/auth/user/${decoded?.id}`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data?.data));
    }, [token]);

    return (
        <div className="container mx-auto p-6">
           
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Profile Information</h2>
                <div className="space-y-4">
                    {user && (
                        <>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Name:</span>
                                <span className="text-gray-800">{user.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Mobile Number:</span>
                                <span className="text-gray-800">{user.mobileNumber}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Email:</span>
                                <span className="text-gray-800">{user.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Role:</span>
                                <span className="text-gray-800">{user.role}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">NID:</span>
                                <span className="text-gray-800">{user.nid}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Balance:</span>
                                <span className="text-gray-800">{user.balance} Taka</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Status:</span>
                                <span className={`text-gray-800 ${user.isBlocked ? 'text-red-600' : 'text-green-600'}`}>
                                    {user.isBlocked ? 'Blocked' : 'Active'}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Created At:</span>
                                <span className="text-gray-800">{new Date(user.createdAt).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium text-gray-600">Updated At:</span>
                                <span className="text-gray-800">{new Date(user.updatedAt).toLocaleString()}</span>
                            </div>
                        </>
                    )}
                </div>
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate('/login');
                    }}
                    className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ManageProfile;
