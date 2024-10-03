import { useEffect, useRef, useState } from "react";
import ExportButton from "../../components/ExportButton";
import FilterButton from "../../components/FilterButton";
import InputField from "../../components/InputField";
import PrintButton from "../../components/PrintButton";
import StudentRow from "../../components/StudentRow";
import axios from "axios";
import DetailsModal from "../../components/DetailsModal";
import EditModal from "../../components/EditModal";

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    console.log(students);
    const [currentStudent, setCurrentStudent] = useState({});
    const [editStudent, setEditStudent] = useState({});

    const studentRef = useRef();
    const editRef = useRef();

    useEffect(() => {
        const getStudents = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/students`);
            setStudents(data);
        };

        getStudents();
    }, []);

    // Open the details modal
    const handleViewModal = async (id) => {
        console.log(id);

        // Show specific data
        const { data } = await axios(`${import.meta.env.VITE_URL}/students/${id}`);
        console.log(data);

        setCurrentStudent(data);
        studentRef.current.classList.remove('hidden');
    };
    // Close the details modal
    const handleCloseModal = () => {
        studentRef.current.classList.add('hidden');
    }

    // Open the Edit Modal
    const handleOpenEditModal = async(id) => {
        console.log(id);

        // Get specific data
        // Show specific data
        const { data } = await axios(`${import.meta.env.VITE_URL}/students/${id}`);
        console.log(data);

        setEditStudent(data);
        editRef.current.classList.remove('hidden');
    }


    return (
        <section className="flex-1 relative">
            <div ref={studentRef} className="absolute z-10 w-full h-full flex justify-center items-center hidden">
                <DetailsModal currentStudent={currentStudent} handleCloseModal={handleCloseModal} />
            </div>
            <div ref={editRef} className="absolute z-10 w-full h-full flex justify-center items-center hidden top-36">
                <EditModal editStudent={editStudent} />
            </div>

            <div className="flex justify-between items-center w-[1200px]">
                <h3 className="text-xl font-semibold">Manage Students</h3>
                <InputField />
                <ExportButton />
                <FilterButton />
                <PrintButton />
                <p>3 October 2024 11:31</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-6">
                <table className="table table-zebra rounded-md shadow-sm w-[1200px]">
                    {/* head */}
                    <thead className="">
                        <tr className="bg-[#F33823] text-white">
                            <th>Name</th>
                            <th>Class</th>
                            <th>Roll</th>
                            <th>View / Edit / Delete</th>
                        </tr>
                    </thead>
                    {/* Data of Students */}
                    <tbody className="border">
                        {
                            students?.map((student) => (
                                <StudentRow
                                    key={student._id}
                                    student={student}
                                    handleViewModal={handleViewModal}
                                    handleOpenEditModal={handleOpenEditModal}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageStudents;