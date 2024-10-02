import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const StudentRow = () => {
    return (
        <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td className="flex gap-8">
                <button>
                    <MdOutlineRemoveRedEye className="text-xl text-[#F33823]" />
                </button>
                <button>
                    <RiEditLine className="text-xl text-[#F33823]" />
                </button>
                <button>
                    <MdOutlineDelete className="text-xl text-[#F33823]" />
                </button>
            </td>
        </tr>
    );
};

export default StudentRow;