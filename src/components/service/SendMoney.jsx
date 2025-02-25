
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SendMoney = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const navigate=useNavigate()

    const onSubmit = async(data) => {
       
        data.amount=Number(data.amount)
        const id = toast.loading("loading...")

        try {
            const res = await fetch("http://localhost:5000/api/v1/action/send-money", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)

            })
            const result = await res.json()
    

            if (result.success) {
                toast.success(result.message, { id })
                navigate("/")
               
                reset()
        
            }
            else {
                toast.success(result.message, { id })
            }




        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded shadow-md w-1/3"
            >
                <h2 className="text-xl font-semibold mb-4">Send Money</h2>

                <div className="mb-4">
                    <label htmlFor="RMobileNumber" className="block text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="RMobileNumber"
                        {...register('RMobileNumber', { required: 'Mobile number is required' })}
                        className={`mt-1 p-2 border rounded w-full ${errors.RMobileNumber ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.RMobileNumber && <span className="text-red-500">{errors.RMobileNumber.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        {...register('amount', {
                            required: 'Amount is required',
                            min: { value: 50, message: 'Amount must be at least 50' }
                        })}
                        className={`mt-1 p-2 border rounded w-full ${errors.amount ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Send Money
                </button>
            </form>
        </div>
    );
};

export default SendMoney;
