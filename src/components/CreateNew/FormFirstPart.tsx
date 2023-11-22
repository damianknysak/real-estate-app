import React, { SetStateAction } from "react";
import { Property } from "../../types/property.types";

const FormFirstPart: React.FC<{
  formData: Property;
  setFormData: React.Dispatch<SetStateAction<Property>>;
}> = ({ formData, setFormData }) => {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      type: e.target.value as Property["type"],
    });
  };
  return (
    <div className="space-y-5 flex-1">
      {/* Sale or Rent */}
      <div className="flex">
        <button
          onClick={() => {
            setFormData((prevState) => {
              return { ...prevState, cardType: "sell" };
            });
          }}
          className={`w-24 h-12 text-white ${
            formData.cardType === "sell" && "bg-blue-gradient"
          } border border-gray-500`}
        >
          Sell
        </button>
        <button
          onClick={() => {
            setFormData((prevState) => {
              return { ...prevState, cardType: "lease" };
            });
          }}
          className={`w-24 h-12 text-white ${
            formData.cardType === "lease" && "bg-blue-gradient"
          } border border-gray-500`}
        >
          Rent
        </button>
      </div>

      {/* Type of Property */}
      <div className="space-y-3">
        <span className="text-white text-xl">Type of Property</span>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleTypeChange(e)}
        >
          {[
            "Single-Family Home",
            "Apartment",
            "Condominium",
            "Townhouse",
            "Multi-Family Home",
          ].map((option) => (
            <option key={option} id={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Name */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="name">
          Title of listing
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, name: e.target.value };
            });
          }}
          className="h-10 text-white max-w-sm bg-secondary border px-3 border-gray-600 rounded-lg"
          id="name"
          type="text"
          maxLength={50}
          placeholder="Title ..."
        />
      </div>
      {/* Desc */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="name">
          Description of listing
        </label>
        <textarea
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, description: e.target.value };
            });
          }}
          className="h-32 text-white max-w-sm bg-secondary border p-3 border-gray-600 rounded-lg"
          id="name"
          maxLength={150}
          placeholder="Description ..."
        />
      </div>
      {/* Address */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="address">
          Address of property
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, address: e.target.value };
            });
          }}
          className="h-10 text-white max-w-sm bg-secondary border px-3 border-gray-600 rounded-lg"
          id="address"
          type="text"
          maxLength={50}
          placeholder="Address ..."
        />
      </div>
    </div>
  );
};

export default FormFirstPart;
