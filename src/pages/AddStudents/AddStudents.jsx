import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddStudents = () => {
    const [classError, setClassError] = useState('');
    const [divisionError, setDivisionError] = useState('');
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Clear the error
        setClassError('');
        setDivisionError('');

        // Show error message if default value is selected
        if (data.class === 'select_class') setClassError('Please select a class');
        if (data.division === 'select_division') setDivisionError('Please select a division');

        console.table(data);

        // Send data to the server
        const { data: studentData } = await axios.post(`${import.meta.env.VITE_URL}/addStudent`, data);
        console.log(studentData);
        if (studentData.insertedId) {
            toast.success('The Student added successfully');
            navigate('/manage-students');
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Add Students</h3>
                <p>3 October 2024 11:31</p>
            </div>
            <form className="w-[1200px] mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full grid grid-cols-3 gap-6">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id=""
                            placeholder="First Name"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Middle Name */}
                    <div>
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                            type="text"
                            name="middleName"
                            id=""
                            placeholder="Middle Name"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("middleName", { required: true })}
                        />
                        {errors.middleName && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id=""
                            placeholder="Last Name"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("lastName", { required: true })}
                        />
                        {errors.lastName && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Image */}
                    <div>
                        <label htmlFor="lastName">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            id=""
                            placeholder="Image URL"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("image", { required: true })}
                        />
                        {errors.image && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Select Class */}
                    <div className="form-control w-full">
                        <label htmlFor="class">Select Class</label>
                        <select
                            name="class"
                            defaultValue={'select_class'}
                            className="select select-bordered focus:outline-none"
                            {...register("class")}
                        >
                            <option disabled value={'select_class'}>Select Class</option>
                            <option value={'1'}>Class 1</option>
                            <option value={'2'}>Class 2</option>
                            <option value={'3'}>Class 3</option>
                            <option value={'4'}>Class 4</option>
                            <option value={'5'}>Class 5</option>
                            <option value={'6'}>Class 6</option>
                            <option value={'7'}>Class 7</option>
                            <option value={'8'}>Class 8</option>
                            <option value={'9'}>Class 9</option>
                            <option value={'10'}>Class 10</option>
                            <option value={'11'}>Class 11</option>
                            <option value={'12'}>Class 12</option>
                        </select>
                        {classError && <span className="text-[#F33823]">{classError}</span>}
                    </div>
                    {/* Select Division */}
                    <div className="form-control w-full">
                        <label htmlFor="division">Select Division</label>
                        <select
                            name="division"
                            defaultValue={'select_division'}
                            className="select select-bordered focus:outline-none"
                            {...register("division")}
                        >
                            <option disabled value={'select_division'}>Select Division</option>
                            <option value={'A'}>A</option>
                            <option value={'B'}>B</option>
                            <option value={'C'}>C</option>
                            <option value={'D'}>D</option>
                            <option value={'E'}>E</option>
                        </select>
                        {divisionError && <span className="text-[#F33823]">{divisionError}</span>}
                    </div>
                    {/* Enter Roll Number in Digits */}
                    <div>
                        <label htmlFor="rollNumber">Enter Roll Number in Digits</label>
                        <input
                            type="number"
                            name="rollNumber"
                            id=""
                            placeholder="Enter Roll Number in Digits"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("rollNumber", { required: true, minLength: 2, maxLength: 2 })}
                        />
                        {errors.rollNumber && <span className="text-[#F33823]">Please provide 2 digit roll number</span>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-12">
                    {/* Address Line 1 */}
                    <div>
                        <label htmlFor="addressLine1">Address Line 1</label>
                        <input
                            type="text"
                            name="addressLine1"
                            id=""
                            placeholder="Address Line 1"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("addressLine1", { required: true })}
                        />
                        {errors.addressLine1 && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Address Line 2 */}
                    <div>
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                            type="text"
                            name="addressLine2"
                            id=""
                            placeholder="Address Line 2"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("addressLine2", { required: true })}
                        />
                        {errors.addressLine2 && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 gap-6 mt-6">
                    {/* Landmark */}
                    <div>
                        <label htmlFor="landmark">Landmark</label>
                        <input
                            type="text"
                            name="landmark"
                            id=""
                            placeholder="Landmark"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("landmark", { required: true })}
                        />
                        {errors.landmark && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* City */}
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            id=""
                            placeholder="City"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("city", { required: true })}
                        />
                        {errors.city && <span className="text-[#F33823]">This field is required</span>}
                    </div>
                    {/* Pincode */}
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <input
                            type="number"
                            name="pincode"
                            id=""
                            placeholder="Pincode"
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("pincode", { required: true, minLength: 4, maxLength: 6 })}
                        />
                        {errors.pincode && <span className="text-[#F33823]">Please provide 4 to 6 digit pincode</span>}
                    </div>
                    {/* Submit */}
                    <div>
                        <input
                            type="submit"
                            value={'Add Student'}
                            className="w-full border border-[#F33823] bg-[#F33823] text-white px-6 py-3 rounded-md focus:outline-none hover:cursor-pointer"
                        />
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default AddStudents;