import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPin, setShowPin] = useState(false);
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        const id = toast.loading("loading...")

        try {
            const res = await fetch("https://revenger-server.vercel.app/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            const result = await res.json()
            console.log(result)

            if (result.success) {
                localStorage.setItem("token", result?.data?.token)
                toast.success(result.message, { id })
                navigate("/login")
            }
            else {
                toast.success(result.message, { id })
            }




        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Create free account
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        You can create a free Celebration account in 2 minutes
                    </p>
                </div>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-5">
                                    {/* Name Field */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            First & Last Name
                                        </label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="block w-full mt-2.5 p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                        />
                                        {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Email Address
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                    message: "Invalid email format"
                                                }
                                            })}
                                            type="email"
                                            placeholder="Enter your email"
                                            className="block w-full mt-2.5 p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                        />
                                        {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
                                    </div>

                                    {/* Mobile Number Field */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Mobile Number
                                        </label>
                                        <input
                                            {...register("mobileNumber", { required: "Mobile number is required" })}
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            className="block w-full mt-2.5 p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                        />
                                        {errors.mobileNumber && <p className="text-red-500 mt-1 text-sm">{errors.mobileNumber.message}</p>}
                                    </div>

                                    {/* NID Field */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            NID
                                        </label>
                                        <input
                                            {...register("nid", { required: "NID is required" })}
                                            type="text"
                                            placeholder="Enter your NID number"
                                            className="block w-full mt-2.5 p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                        />
                                        {errors.nid && <p className="text-red-500 mt-1 text-sm">{errors.nid.message}</p>}
                                    </div>

                                    {/* PIN Field with Show/Hide */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            PIN
                                        </label>
                                        <div className="relative">
                                            <input
                                                {...register("pin", {
                                                    required: "PIN is required",
                                                    minLength: { value: 5, message: "PIN must be exactly 5 digits" },
                                                    maxLength: { value: 5, message: "PIN must be exactly 5 digits" }
                                                })}
                                                type={showPin ? "text" : "password"}
                                                placeholder="Enter your 5-digit PIN"
                                                className="block w-full mt-2.5 p-4 pr-10 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                            />
                                            <span
                                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                                                onClick={() => setShowPin(!showPin)}
                                            >
                                                {showPin ? <AiOutlineEye size={24} /> : <AiOutlineEyeInvisible size={24} />}
                                            </span>
                                        </div>
                                        {errors.pin && <p className="text-red-500 mt-1 text-sm">{errors.pin.message}</p>}
                                    </div>

                                    {/* Role Select Field */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Role
                                        </label>
                                        <select
                                            {...register("role", { required: "Role selection is required" })}
                                            className="block w-full mt-2.5 p-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                        >
                                            <option value="user">User</option>
                                            <option value="agent">Agent</option>
                                        </select>
                                        {errors.role && <p className="text-red-500 mt-1 text-sm">{errors.role.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                        >
                                            Create Account
                                        </button>
                                    </div>

                                    {/* Login Redirect */}
                                    <div className="text-center">
                                        <p className="text-base text-gray-600">
                                            Already have an account?{" "}
                                            <Link to={'/'} className="font-medium text-orange-500 hover:text-orange-600 hover:underline">
                                                Login here
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
