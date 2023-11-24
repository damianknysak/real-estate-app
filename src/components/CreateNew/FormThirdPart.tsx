import React, { SetStateAction } from "react";
import { Property } from "../../types/property.types";

const FormThirdPart: React.FC<{
  formData: Property;
  setFormData: React.Dispatch<SetStateAction<Property>>;
  setFiles: React.Dispatch<SetStateAction<any>>;
}> = ({ formData, setFormData, setFiles }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles([...e.target.files!]);
  };
  return (
    <div className="space-y-5 flex-1">
      FINAL INFO
      {/* Permitted usage */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="usage">
          Permitted usage of listing
        </label>
        <textarea
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, permittedUsage: e.target.value };
            });
          }}
          className="h-32 text-white max-w-sm bg-secondary border p-3 border-gray-600 rounded-lg"
          id="usage"
          maxLength={150}
          placeholder="Usage ..."
          value={formData.permittedUsage}
        />
      </div>
      {/* Pets allowed */}
      <div className="space-y-3">
        <span className="text-white text-xl">Are pets allowed?</span>
        <select
          onChange={(e) => {
            setFormData((prevState) => {
              return {
                ...prevState,
                petsAllowed: e.target.value === "false" ? false : true,
              };
            });
          }}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.petsAllowed ? "true" : "false"}
        >
          {["false", "true"].map((option) => (
            <option key={option} id={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Lease Length */}
      {formData.cardType === "lease" && (
        <div className="flex flex-col space-y-3">
          <label className="text-xl text-white" htmlFor="leaseLength">
            Lease length
          </label>
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, leaseLength: Number(e.target.value) };
                });
              }}
              className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
              id="leaseLength"
              min={0}
              type="number"
              value={formData.leaseLength ?? 0}
            />
            <span className="text-white">months</span>
          </div>
        </div>
      )}
      {/* Lease Price */}
      {formData.cardType === "lease" && (
        <div className="flex flex-col space-y-3">
          <label className="text-xl text-white" htmlFor="leasePrice">
            Lease price
          </label>
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, leasePrice: Number(e.target.value) };
                });
              }}
              className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
              id="leasePrice"
              min={0}
              type="number"
              value={formData.leasePrice ?? 0}
            />
            <span className="text-white">$</span>
          </div>
        </div>
      )}
      {/* Sell Price */}
      {formData.cardType === "sell" && (
        <div className="flex flex-col space-y-3">
          <label className="text-xl text-white" htmlFor="sellPrice">
            Sell price
          </label>
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => {
                setFormData((prevState) => {
                  return { ...prevState, sellPrice: Number(e.target.value) };
                });
              }}
              className="h-10 text-white w-32 bg-secondary border px-3 border-gray-600 rounded-lg"
              id="sellPrice"
              min={0}
              step={1000}
              type="number"
              value={formData.sellPrice ?? 0}
            />
            <span className="text-white">$</span>
          </div>
        </div>
      )}
      {/* Telephone */}
      <div className="flex flex-col space-y-3">
        <label className="text-xl text-white" htmlFor="Telephone">
          Telephone number
        </label>
        <input
          onChange={(e) => {
            setFormData((prevState) => {
              return { ...prevState, telephone: e.target.value };
            });
          }}
          className="h-10 text-white max-w-sm bg-secondary border px-3 border-gray-600 rounded-lg"
          id="Telephone"
          type="text"
          maxLength={50}
          placeholder="Telephone ..."
          value={formData.telephone}
        />
      </div>
      <label>
        Obraz:
        <input
          type="file"
          multiple
          name="image"
          onChange={(e) => handleImageChange(e)}
        />
      </label>
    </div>
  );
};

export default FormThirdPart;
