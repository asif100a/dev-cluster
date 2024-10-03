const FilterButton = ({handleFilterByClass, handleFilterByDivision}) => {
    return (
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li className="z-[5] rounded-md">
                    <details>
                        <summary className="border border-gray-300 bg-gray-50 px-6 py-3 rounded-md hover:shadow-md">Filter</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li onClick={handleFilterByClass}><a className="w-[120px]">By Class</a></li>
                            <li onClick={handleFilterByDivision}><a className="w-[120px]">By Division</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
};

export default FilterButton;