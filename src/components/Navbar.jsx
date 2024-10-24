import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-custom-gradient p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          My-Personal-Diary
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/add-entry" className="text-gray-300 hover:text-white">
            Add New Diary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
