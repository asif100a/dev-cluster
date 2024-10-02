import { useState } from "react";
import { useForm } from "react-hook-form";

const AddStudents = () => {
    const [classError, setClassError] = useState('');
    const [divisionError, setDivisionError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Clear the error
        setClassError('');
        setDivisionError('');
        
        // Show error message if default value is selected
        if(data.class === 'select_class') setClassError('Please select a class');
        if(data.division === 'select_division') setDivisionError('Please select a division');

        console.table(data);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold">Add Students</h3>
            <form className="w-[1200px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full grid grid-cols-3 gap-6">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id=""
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
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("lastName", { required: true })}
                        />
                        {errors.lastName && <span className="text-[#F33823]">This field is required</span>}
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
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
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
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
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
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("rollNumber", { required: true })}
                        />
                        {errors.rollNumber && <span className="text-[#F33823]">This field is required</span>}
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
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            {...register("pincode", { required: true })}
                        />
                        {errors.pincode && <span className="text-[#F33823]">This field is required</span>}
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
        </div>
    );
};

export default AddStudents;