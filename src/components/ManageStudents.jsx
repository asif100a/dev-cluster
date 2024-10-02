import ExportButton from "./ExportButton";
import FilterButton from "./FilterButton";
import InputField from "./InputField";
import PrintButton from "./PrintButton";
import StudentRow from "./StudentRow";

const ManageStudents = () => {
    return (
        <section className="flex-1">
            <div className="flex justify-between items-center">
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
                    <tbody className="border">
                        {/* row 1 */}
                        <StudentRow />
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageStudents;