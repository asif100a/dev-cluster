import { useEffect, useState } from "react";
import ExportButton from "../../components/ExportButton";
import FilterButton from "../../components/FilterButton";
import InputField from "../../components/InputField";
import PrintButton from "../../components/PrintButton";
import StudentRow from "../../components/StudentRow";
import axios from "axios";

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    console.log(students);

    useEffect(() => {
        const getStudents = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/students`);
            setStudents(data);
        };

        getStudents();
    }, []);

    return (
        <section className="flex-1">
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
                            students.map((student) => (
                                <StudentRow key={student._id} student={student} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageStudents;