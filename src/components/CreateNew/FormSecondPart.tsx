import React, { SetStateAction } from "react";
import { Property } from "../../types/property.types";

const FormSecondPart: React.FC<{
  formData: Property;
  setFormData: React.Dispatch<SetStateAction<Property>>;
}> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-5 flex-1">
      BUILDING INFO
      {/* Year built */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="yearBuilt">
          Year built of building
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, yearBuilt: Number(e.target.value) };
            });
          }}
          className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
          id="yearBuilt"
          min={0}
          type="number"
          value={formData.yearBuilt}
        />
      </div>
      {/* FloorSize */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="FloorSize">
          Floor Size of building
        </label>
        <div className="flex items-center space-x-2">
          <input
            onChange={(e) => {
              setFormData((prevState) => {
                return { ...prevState, floorSize: Number(e.target.value) };
              });
            }}
            className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
            id="FloorSize"
            min={0}
            type="number"
            value={formData.floorSize}
          />
          <span className="text-white">m^2</span>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="NumberOfRooms">
          Number of Rooms
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, numberOfRooms: Number(e.target.value) };
            });
          }}
          className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
          id="NumberOfRooms"
          min={0}
          type="number"
          value={formData.numberOfRooms}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="NumberOfBedrooms">
          Number of Bedrooms
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, numberOfBedrooms: Number(e.target.value) };
            });
          }}
          className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
          id="NumberOfBedrooms"
          min={0}
          max={formData.numberOfRooms - formData.numberOfBathroomsTotal}
          type="number"
          value={formData.numberOfBedrooms}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="NumberOfBathrooms">
          Number of Bathrooms
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return {
                ...prevState,
                numberOfBathroomsTotal: Number(e.target.value),
              };
            });
          }}
          className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
          id="NumberOfBathrooms"
          min={0}
          max={formData.numberOfRooms - formData.numberOfBedrooms}
          type="number"
          value={formData.numberOfBathroomsTotal}
        />
      </div>
    </div>
  );
};

export default FormSecondPart;
