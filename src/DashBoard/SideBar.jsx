import { useState } from 'react'


import { BsFillHouseAddFill } from 'react-icons/bs'

import { AiOutlineBars } from 'react-icons/ai'

import { NavLink, } from 'react-router-dom'


import { Link } from 'react-router-dom'



import { FaUser } from 'react-icons/fa'
import { MdOutlineMenuBook, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FaCartFlatbedSuitcase } from 'react-icons/fa6'

import { CgProfile } from 'react-icons/cg'
import { jwtDecode } from "jwt-decode";






const Sidebar = () => {

    const [isActive, setActive] = useState(false)

    const token = localStorage.getItem("token");

    const decoded = jwtDecode(token);

   


    const isPosition = decoded?.role



    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-600 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to={'/'} className="">
                            <img src="https://softivuspro.com/wp/bankio/wp-content/uploads/2024/05/logo-1.png" alt="" className="w-32" />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-7 w-7 text-[#0ecdb9]' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#07080a] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto text-white'>
                            <Link to={'/'} className="">
                                <img src="https://softivuspro.com/wp/bankio/wp-content/uploads/2024/05/logo-1.png" alt="" className="w-32" />
                            </Link>
                        </div>

                        <h1 className='capitalize text-center'>{isPosition}</h1>
                        <h1 className='capitalize text-center'>Mobile:{decoded?.mobileNumber}</h1>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>
                            {/* admin */}
                            {
                                isPosition === 'admin' && <>

                                    <NavLink
                                        to='/dashBoard/manageUser'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <FaUser className='w-5 h-5 text-orange-500' />

                                        <span className='mx-4 font-medium'>Manage User</span>
                                    </NavLink>


                                    <NavLink
                                        to='/dashBoard/create-product'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <BsFillHouseAddFill className='w-5 h-5 text-orange-500' />

                                        <span className='mx-4 font-medium'>Create Product</span>
                                    </NavLink>
                                    <NavLink
                                        to='/dashBoard/all-products'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >

                                        <MdOutlineProductionQuantityLimits className='w-5 h-5 text-orange-500' />
                                        <span className='mx-4 font-medium'>Created Product</span>
                                    </NavLink>
                                    <NavLink
                                        to='/dashBoard/all-orders'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <FaCartFlatbedSuitcase className='w-5 h-5 text-orange-500' />
                                        <span className='mx-4 font-medium'>All Orders</span>
                                    </NavLink>

                                </>
                            }



                            {/* host routes */}






                            {/* host routes end... */}

                            {/* user routes */}

                             <NavLink
                                        to='/dashBoard/payment-history'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <FaCartFlatbedSuitcase className='w-5 h-5 text-orange-500' />
                                        <span className='mx-4 font-medium'>Payment History</span>
                                    </NavLink>

                            <NavLink
                                to='/dashBoard/manage-profile'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                    }`
                                }
                            >

                                <CgProfile className='w-5 h-5 text-orange-500' />
                                <span className='mx-4 font-medium'>Manage Profile</span>
                            </NavLink>

                            {
                                isPosition === "user" && <NavLink
                                    to='/dashBoard/cash-request-user'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                        }`
                                    }
                                >

                                    <FaCartFlatbedSuitcase className='w-5 h-5 text-orange-500' />
                                    <span className='mx-4 font-medium'>Cash Request</span>
                                </NavLink>
                            }
                            {
                                isPosition === "agent" && <NavLink
                                    to='/dashBoard/cash-request-agent'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                        }`
                                    }
                                >

                                    <FaCartFlatbedSuitcase className='w-5 h-5 text-orange-500' />
                                    <span className='mx-4 font-medium'>Cash Request</span>
                                </NavLink>
                            }







                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}


                </div>
            </div>
        </>
    )
}

export default Sidebar