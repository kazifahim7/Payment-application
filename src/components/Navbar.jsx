import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    const decoded = jwtDecode(token);
    const [reload, setReload] = useState(true)



    const [showBalance, setShowBalance] = useState(false);
    const [balance, setBalance] = useState(0) // Example balance, replace with dynamic value if needed



    setTimeout(() => {
        setReload(!reload)
    }, 1000);


    useEffect(() => {

        fetch(`http://localhost:5000/api/v1/auth/user/${decoded?.id}`, {
            method: "GET",
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBalance(data?.data?.balance))

    }, [token])

    return (
        <div className="container mx-auto navbar bg-base-100">
            <Link to={'/'} className="flex-1">
                <img src="https://softivuspro.com/wp/bankio/wp-content/uploads/2024/05/logo-1.png" alt="" className="w-32" />
            </Link>
            <div className="flex-none gap-2">
                {/* Balance Display */}
                <div
                    className="cursor-pointer px-4 py-2 rounded-md bg-gray-100 text-black font-semibold"
                    onClick={() => setShowBalance(!showBalance)}
                >
                    {showBalance ? `৳ ${balance} ` : "****"}
                </div>

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://i.postimg.cc/zv6dm3Hv/296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >

                       

                        {decoded.role !== "admin" ? <li><Link to={"/dashboard/payment-history"}>Dashboard</Link></li> : <li><Link to={"/dashBoard/manageUser"}>Dashboard</Link></li>}
                      

                       
                        <li onClick={() => {
                            localStorage.removeItem("token")
                            navigate('/login')
                            toast.success("log out successful")

                        }}><a className="text-red-500">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
