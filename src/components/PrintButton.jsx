const PrintButton = () => {
    return (
        <button onClick={window.print} className="border border-gray-300 bg-gray-50 px-6 py-3 rounded-md hover:shadow-md">
            Print
        </button>
    );
};

export default PrintButton;