import { IoMdSearch } from "react-icons/io";

const InputField = () => {
    return (
        <div className="border border-gray-100 px-6 py-3 rounded-md bg-gray-100 flex items-center gap-3">
            <IoMdSearch className="text-xl text-gray-500" />
            <input
                type="text"
                name="search"
                id=""
                placeholder="Search"
                className="focus:outline-none bg-gray-100"
            />
        </div>
    );
};

export default InputField;