import userPhoto from '/user.png'

const Navbar = () => {
    return (
        <header className='flex justify-between px-24 py-6'>
            {/* Project Name */}
            <div>
                <h1 className='text-[#F33823] text-2xl font-bold'>Dev Cluster</h1>
            </div>
            {/* User profile */}
            <div>
                <button className='flex gap-3 border px-6 py-3 rounded-md'>
                    <img src={userPhoto} alt="User photo" />
                    <span>username@dev-cluster.com</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;