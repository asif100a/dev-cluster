import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const StudentRow = ({ student, handleViewModal, handleOpenEditModal, handleDeleteStudent }) => {

    const { _id, firstName, middleName, lastName, image, class: studentClass, division, rollNumber, city, landmark, addressLine1, addressLine2, pincode } = student;
// console.log(student)

    return (
        <>
            <tr>
                <td>{firstName} {middleName} {lastName}</td>
                <td>{studentClass}</td>
                <td>{rollNumber}</td>
                <td className="flex gap-8">
                    <button onClick={()=> handleViewModal(_id)}>
                        <MdOutlineRemoveRedEye className="text-xl text-[#F33823]" />
                    </button>
                    <button onClick={()=> handleOpenEditModal(_id)}>
                        <RiEditLine className="text-xl text-[#F33823]" />
                    </button>
                    <button onClick={() => handleDeleteStudent(_id)}>
                        <MdOutlineDelete className="text-xl text-[#F33823]" />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default StudentRow;