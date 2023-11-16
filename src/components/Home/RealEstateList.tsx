import React from "react";
import RealEstateCard from "./RealEstateCard";
import PageNavbar from "../Shared/PageNavbar";

const RealEstateList = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-2 h-[calc(100vh-180px)] pr-2 overflow-y-scroll scrollbar">
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
        <RealEstateCard />
      </div>
      <div className="h-[50px] mt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Showing 1 to 10 of 230 entries
        </span>
        <PageNavbar />
      </div>
    </>
  );
};

export default RealEstateList;
