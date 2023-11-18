import { Tooltip } from "@mui/material";
import React from "react";
import { BiExport } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuLayers, LuPencilLine } from "react-icons/lu";

interface SmallButtonProps {
  title: string;
}

const SmallButton = React.forwardRef<HTMLButtonElement, SmallButtonProps>(
  ({ title, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {title === "Write to author" && <LuPencilLine color="white" />}
        {title === "Export" && <BiExport color="white" />}
        {title === "Layers" && <LuLayers color="white" />}
        {title === "Building details" && <FaRegBuilding color="white" />}
        {title === "Share" && <IoShareSocialOutline color="white" size={20} />}
      </button>
    );
  }
);

const CustomTooltipButton: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className={`${
        title === "Share" ? `w-8 h-8 rounded-full` : `w-6 h-6  rounded`
      } hover:bg-blue-gradient bg-secondary flex items-center justify-center `}
    >
      <Tooltip title={title}>
        <div>
          <SmallButton title={title} />
        </div>
      </Tooltip>
    </div>
  );
};

export default CustomTooltipButton;
