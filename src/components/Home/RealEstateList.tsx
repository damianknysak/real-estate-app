import React from "react";
import RealEstateCard from "./RealEstateCard";
import PageNavbar from "../Shared/PageNavbar";

export type RealEstateCardProps = {
  title: string;
  address: string;
  imgUrl: string;
};

export type RealEstateList = {
  elements: RealEstateCardProps[];
};

const RealEstateList = () => {
  const REAL_ESTATE_LIST: RealEstateList = {
    elements: [
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
      {
        title: "Real estate website",
        address: "38W street NY, New York (2000 sqft)",
        imgUrl: "",
      },
    ],
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-x-8 gap-2 h-[calc(100vh-180px)] pr-2 overflow-y-scroll scrollbar">
        {REAL_ESTATE_LIST.elements.map((element) => {
          return (
            <RealEstateCard
              imgUrl={element.imgUrl}
              title={element.title}
              address={element.address}
            />
          );
        })}
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
