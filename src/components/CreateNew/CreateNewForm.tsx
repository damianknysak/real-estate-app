import React, { useState } from "react";
import { Property } from "../../types/property.types";
import FormFirstPart from "./FormFirstPart";
import FormSecondPart from "./FormSecondPart";
import FormThirdPart from "./FormThirdPart";
import FormNavButtons from "./FormNavButtons";

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

  return (
    <div className="flex h-full">
      {formPage === 1 && (
        <FormFirstPart formData={formData} setFormData={setFormData} />
      )}
      {formPage === 2 && (
        <FormSecondPart formData={formData} setFormData={setFormData} />
      )}
      {formPage === 3 && (
        <FormThirdPart formData={formData} setFormData={setFormData} />
      )}
      <FormNavButtons
        formData={formData}
        formPage={formPage}
        setFormPage={setFormPage}
      />
    </div>
  );
};

export default CreateNewForm;
