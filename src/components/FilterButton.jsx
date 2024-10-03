const FilterButton = ({ handleFilterByClass, handleFilterByDivision }) => {
    return (
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li className="z-[5] rounded-md">
                    <details>
                        <summary className="border border-gray-300 bg-gray-50 px-6 py-3 rounded-md hover:shadow-md">Filter</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li>
                                <select onChange={handleFilterByClass} name="class" className="select select-secondary w-[120px]">
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
                            </li>
                            <li>
                                <select onChange={handleFilterByDivision} name="class" className="select select-secondary w-[120px]">
                                    <option disabled value={'select_division'}>Select Division</option>
                                    <option value={'A'}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'C'}>C</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                </select>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
};

export default FilterButton;