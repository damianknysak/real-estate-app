import React from "react";
import RealEstateCard from "./RealEstateCard";

const RealEstateList = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
    </div>
  );
};

export default RealEstateList;
