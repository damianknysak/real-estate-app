import React, { SetStateAction } from "react";
import { Property } from "../../types/property.types";

const FormThirdPart: React.FC<{
  formData: Property;
  setFormData: React.Dispatch<SetStateAction<Property>>;
}> = ({ formData, setFormData }) => {
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
    </div>
  );
};

export default FormThirdPart;
