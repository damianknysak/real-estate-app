import { IoLinkSharp, IoShareSocialOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { LuLayers, LuPencilLine } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";

const RealEstateCard = () => {
  return (
    <article className="w-full h-64 bg-black rounded-lg p-2 border-2 border-secondary">
      <div className="w-full h-32 bg-blue-500 rounded-lg"></div>
      <div className="flex justify-between mt-2 items-center">
        <span className=" text-white font-bold text-lg">
          Real estate website
        </span>
        <button className="p-1.5 bg-secondary rounded-full transition-all duration-500 hover:bg-blue-gradient">
          <IoShareSocialOutline color="white" size={20} />
        </button>
      </div>
      <div>
        <span className="text-gray-500 text-xs">
          38W street NY, New York (2000 sqft)
        </span>
      </div>
      <div className="border border-secondary my-2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="w-6 h-6 hover:bg-blue-gradient bg-secondary flex items-center justify-center rounded">
            <FaRegBuilding color="white" />
          </button>
          <button className="w-6 h-6 hover:bg-blue-gradient bg-secondary flex items-center justify-center rounded">
            <LuLayers color="white" />
          </button>
          <button className="w-6 h-6 hover:bg-blue-gradient bg-secondary flex items-center justify-center rounded">
            <BiExport color="white" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="w-6 h-6 hover:bg-blue-gradient bg-secondary flex items-center justify-center rounded">
            <LuPencilLine color="white" />
          </button>
          <button className="h-6 px-2 hover:bg-blue-gradient space-x-1 bg-secondary flex items-center justify-center rounded">
            <IoLinkSharp color="white" />
            <span className="text-xs text-white">Visit site</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default RealEstateCard;
