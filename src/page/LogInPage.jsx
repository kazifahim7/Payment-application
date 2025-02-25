import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff, FiPhone } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPin, setShowPin] = useState(false);

    const navigate=useNavigate()

    const onSubmit = async (data) => {
        console.log(data);
        const id=toast.loading("loading...")

        try {
            const res = await fetch("http://localhost:5000/api/v1/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)

            })
            const result = await res.json()
            console.log(result)

           if(result.success){
            localStorage.setItem("token",result?.data?.token)
            toast.success(result.message,{id})
            navigate("/")
           }
           else{
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
                        Welcome Back!
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Login to your account
                    </p>
                </div>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-5">
                                    {/* Phone Number Input */}
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Phone Number
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <FiPhone className="w-5 h-5" />
                                            </div>

                                            <input
                                                type="tel"
                                                {...register("mobileNumber", {
                                                    required: "Phone number is required",
                                                    pattern: {
                                                        value: /^[0-9]{10,15}$/,
                                                        message: "Enter a valid phone number",
                                                    },
                                                })}
                                                placeholder="Enter your phone number"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                            />
                                        </div>
                                        {errors.phoneNumber && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.phoneNumber.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* PIN Input */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-base font-medium text-gray-900">
                                                PIN (5 Digits)
                                            </label>
                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">


                                            <input
                                                type={showPin ? "text" : "password"}
                                                {...register("pin", {
                                                    required: "PIN is required",
                                                    minLength: {
                                                        value: 5,
                                                        message: "PIN must be exactly 5 digits",
                                                    },
                                                    maxLength: {
                                                        value: 5,
                                                        message: "PIN must be exactly 5 digits",
                                                    },
                                                })}
                                                placeholder="Enter your 5-digit PIN"
                                                className="block w-full py-4 pl-10 pr-10 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                                onClick={() => setShowPin(!showPin)}
                                            >
                                                {showPin ? <FiEye className="w-5 h-5" /> : <FiEyeOff className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.pin && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.pin.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                        >
                                            Log in
                                        </button>
                                    </div>

                                    {/* Register Link */}
                                    <div className="text-center">
                                        <p className="text-base text-gray-600">
                                            Don’t have an account?{" "}
                                            <Link
                                                to={"/register"}
                                                className="font-medium text-orange-500 hover:text-orange-600 hover:underline"
                                            >
                                                Create a free account
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

export default Login;
