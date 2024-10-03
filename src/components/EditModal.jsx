import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditModal = ({editStudent}) => {
    const { _id, firstName, middleName, lastName, image, class: studentClass, division, rollNumber, city, landmark, addressLine1, addressLine2, pincode } = editStudent;

    console.log(editStudent)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const target = e.target;

        const firstNameEdit = target.firstName.value;
        const middleNameEdit = target.middleName.value;
        const lastNameEdit = target.lastName.value;
        const imageEdit = target.image.value;
        const classEdit = target.class.value;
        const divisionEdit = target.division.value;
        const rollNumberEdit = target.rollNumber.value;
        const addressLine1Edit = target.addressLine1.value;
        const addressLine2Edit = target.addressLine2.value;
        const landmarkEdit = target.landmark.value;
        const cityEdit = target.city.value;
        const pincodeEdit = target.pincode.value;

        const data = {firstNameEdit, middleNameEdit, landmarkEdit, lastNameEdit, imageEdit, classEdit, divisionEdit, rollNumberEdit, addressLine1Edit, addressLine2Edit, cityEdit, pincodeEdit};

        console.table(data);

        // Update data to the server
        const {data: editedData} = await axios.put(`${import.meta.env.VITE_URL}/editStudent/${_id}`, data);
        console.log(editedData);
        if(editedData?.modifiedCount > 0) {
            toast.success('The student edited successfully');
            window.location.reload();
        }
    };

    return (
        <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-6">
            <form className="w-full mt-6" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-3 gap-6">
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id=""
                            defaultValue={firstName}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Middle Name */}
                    <div>
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                            type="text"
                            name="middleName"
                            id=""
                            defaultValue={middleName}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id=""
                            defaultValue={lastName}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Image */}
                    <div>
                        <label htmlFor="lastName">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            id=""
                            defaultValue={image}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Select Class */}
                    <div className="form-control w-full">
                        <label htmlFor="class">Select Class</label>
                        <select
                            name="class"
                            defaultValue={studentClass}
                            className="select select-bordered focus:outline-none"
                            required
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
                    </div>
                    {/* Select Division */}
                    <div className="form-control w-full">
                        <label htmlFor="division">Select Division</label>
                        <select
                            name="division"
                            defaultValue={division}
                            className="select select-bordered focus:outline-none"
                            required
                        >
                            <option disabled value={'select_division'}>Select Division</option>
                            <option value={'A'}>A</option>
                            <option value={'B'}>B</option>
                            <option value={'C'}>C</option>
                            <option value={'D'}>D</option>
                            <option value={'E'}>E</option>
                        </select>
                    </div>
                    {/* Enter Roll Number in Digits */}
                    <div>
                        <label htmlFor="rollNumber">Enter Roll Number in Digits</label>
                        <input
                            type="number"
                            name="rollNumber"
                            id=""
                            defaultValue={rollNumber}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
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
                            defaultValue={addressLine1}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Address Line 2 */}
                    <div>
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                            type="text"
                            name="addressLine2"
                            id=""
                            defaultValue={addressLine2}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
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
                            defaultValue={landmark}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* City */}
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            id=""
                            defaultValue={city}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Pincode */}
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <input
                            type="number"
                            name="pincode"
                            id=""
                            defaultValue={pincode}
                            className="w-full border px-6 py-3 rounded-md focus:outline-none"
                            required
                        />
                    </div>
                    {/* Submit */}
                    <div>
                        <input
                            type="submit"
                            value={'Edit Student'}
                            className="w-full border border-[#F33823] bg-[#F33823] text-white px-6 py-3 rounded-md focus:outline-none hover:cursor-pointer"
                        />
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default EditModal;