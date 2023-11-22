import React, { useState } from "react";
import { Property } from "../../types/property.types";
import { FaChevronRight } from "react-icons/fa";
import FormFirstPart from "./FormFirstPart";
import FormSecondPart from "./FormSecondPart";

const CreateNewForm = () => {
  const [formPage, setFormPage] = useState(1);
  const [formData, setFormData] = useState<Property>({
    type: "Single-Family Home",
    name: "",
    description: "",
    images: undefined,
    numberOfRooms: 0,
    occupancy: {
      minValue: 0,
      maxValue: 0,
    },
    floorSize: 0,
    cardType: "sell",
    leaseLength: undefined,
    leasePrice: undefined,
    sellPrice: undefined,
    numberOfBathroomsTotal: 0,
    numberOfBedrooms: 0,
    permittedUsage: "",
    petsAllowed: "",
    yearBuilt: 2010,
    address: "",
    telephone: "",
  });

  const isFirstPageFilled =
    formData.name && formData.description && formData.address ? true : false;

  const handleContinueClick = () => {
    console.log(isFirstPageFilled);
    if (formPage === 1) {
      isFirstPageFilled && setFormPage(2);
    }
  };

  return (
    <div className="flex h-full">
      {formPage === 1 && (
        <FormFirstPart formData={formData} setFormData={setFormData} />
      )}
      {formPage === 2 && (
        <FormSecondPart formData={formData} setFormData={setFormData} />
      )}
      <div className="flex-1 flex justify-center">
        <div className="flex -mt-72 space-y-4 flex-col items-center justify-center">
          <span className="text-2xl text-white font-bold">Continue</span>

          <div className="border-4 border-white h-[168px] rounded-full">
            <button
              onClick={() => {
                handleContinueClick();
              }}
              className={`bg-secondary rounded-full w-40 h-40 ${
                isFirstPageFilled && formPage === 1
                  ? "pulse-neon-btn"
                  : "neon-btn"
              }`}
            >
              <div className="flex items-center justify-center ">
                <FaChevronRight size={40} color="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewForm;
