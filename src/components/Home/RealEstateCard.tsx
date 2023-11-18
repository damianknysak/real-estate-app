import { IoLinkSharp, IoShareSocialOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { LuLayers, LuPencilLine } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { RealEstateCardProps } from "./RealEstateList";
import { Tooltip } from "@mui/material";
import CustomTooltipButton from "./RealEstateCard/CustomTooltipButton";

const RealEstateCard: React.FC<RealEstateCardProps> = ({
  title,
  imgUrl,
  address,
}) => {
  return (
    <article className="w-full h-64 bg-black rounded-lg p-2 border-2 border-secondary cursor-pointer">
      <div className="w-full h-32 bg-blue-500 rounded-lg"></div>
      <div className="flex justify-between mt-2 items-center">
        <span className=" text-white font-bold text-lg">{title}</span>
        <CustomTooltipButton title="Share" />
      </div>
      <div>
        <span className="text-gray-500 text-xs">{address}</span>
      </div>
      <div className="border border-secondary my-2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CustomTooltipButton title="Building details" />

          <CustomTooltipButton title="Layers" />

          <CustomTooltipButton title="Export" />
        </div>
        <div className="flex items-center space-x-2">
          <CustomTooltipButton title="Write to author" />
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
