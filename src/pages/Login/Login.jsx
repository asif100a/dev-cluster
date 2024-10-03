import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
    const { loginTheUser, googleLogin, user } = useAuth();
    // const path 
    console.log(user)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.table(data);
        const email = data?.email;
        const password = data?.password;
        // Send data to the server
        loginTheUser(email, password);
        toast.success('The user logged in successfully');
        window.location.href = '/manage-students';
    };

    // Handle google login
    const loginByGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('The user logged in successfully');
                window.location.href = '/manage-students';
            })
    };

    return (
        <div className="flex justify-center items-center min-w-[calc(100vw-96px)] py-12">
            <div className="flex w-[380px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg">

                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6 py-8 md:px-8 space-y-3">
                    <div>
                        <h1 className='text-[#F33823] text-2xl font-bold text-center'>Dev Cluster</h1>
                    </div>

                    <div>
                        <label htmlFor="firstName">Email</label>
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Enter your email"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-[#F33823]">This field is required</span>}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder="Enter your password"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-[#F33823]">This field is required</span>}
                    </div>

                    {/* Submit */}
                    <div>
                        <input
                            type="submit"
                            value={'Login'}
                            className="w-full border border-[#F33823] bg-[#F33823] text-white px-6 py-3 rounded-md focus:outline-none hover:cursor-pointer"
                        />
                    </div>

                    <div>
                        <p className="text-center">Or Login with Google</p>
                    </div>

                    {/* Login with google */}
                    <button onClick={loginByGoogle} type="button" className="flex items-center justify-center text-gray-600 transition-colors duration-300 transhtmlForm border rounded-lg hover:bg-gray-50 w-full">
                        <span className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </span>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
