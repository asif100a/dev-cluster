const DetailsModal = ({ currentStudent, handleCloseModal }) => {
    const { _id, firstName, middleName, lastName, image, class: studentClass, division, rollNumber, city, landmark, addressLine1, addressLine2, pincode } = currentStudent;

    return (
        <div class="w-full max-w-lg px-6 py-6 bg-white shadow-lg rounded-md">
            <div class="flex items-center justify-start">
                <img src={image} alt="image" className="w-16 h-auto" />
            </div>

            <div> 
                <h1 class="mt-2 text-lg font-semibold text-gray-800 ">Name: {firstName} {middleName} {lastName}</h1>
                <div className="grid grid-cols-2 gap-3">
                    <p class="mt-2 text-base text-gray-600 ">Id: {_id}</p>
                    <p class="mt-2 text-base text-gray-600 ">Pincode: {pincode}</p>
                    <p class="mt-2 text-base text-gray-600 ">Class: {studentClass}</p>
                    <p class="mt-2 text-base text-gray-600 ">Roll: {rollNumber}</p>
                    <p class="mt-2 text-base text-gray-600 ">City: {city}</p>
                    <p class="mt-2 text-base text-gray-600 ">Division: {division}</p>
                    <p class="mt-2 text-base text-gray-600 ">Landmark: {landmark}</p>
                    <p class="mt-2 text-base text-gray-600 ">Address Line 1: {addressLine1}</p>
                    <p class="mt-2 text-base text-gray-600 ">Address Line 2: {addressLine2}</p>
                </div>
            </div>
            <button onClick={handleCloseModal} className="w-full h-full py-3 bg-red-500 text-white mt-3">Close Now</button>

        </div>
    );
};

export default DetailsModal;