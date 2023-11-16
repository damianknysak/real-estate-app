import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PageNavbar = () => {
  return (
    <div className="flex justify-between items-center space-x-5">
      <button>
        <FaChevronLeft color="white" size={14} />
      </button>
      <div className="flex justify-between space-x-2">
        <button className="w-5 h-5 flex items-center justify-center text-white text-xs rounded bg-blue-gradient">
          1
        </button>
        <button className="w-5 h-5 bg-secondary flex items-center justify-center text-white text-xs rounded hover:bg-blue-gradient">
          2
        </button>
        <button className="w-5 h-5 bg-secondary flex items-center justify-center text-white text-xs rounded hover:bg-blue-gradient">
          3
        </button>
        <button className="w-5 h-5 bg-secondary flex items-center justify-center text-white text-xs rounded hover:bg-blue-gradient">
          4
        </button>
        <button className="w-5 h-5 flex items-center justify-center text-white text-lg rounded hover:bg-blue-gradient">
          ...
        </button>
      </div>
      <button>
        <FaChevronRight color="white" size={14} />
      </button>
    </div>
  );
};

export default PageNavbar;
