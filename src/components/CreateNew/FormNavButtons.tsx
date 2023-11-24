import React, { SetStateAction } from "react";
import { Property } from "../../types/property.types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useAddListingMutation } from "../../redux/api/listing";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/user/userSlice";

const FormNavButtons: React.FC<{
  formData: Property;
  formPage: number;
  setFormPage: React.Dispatch<SetStateAction<number>>;
  files: any;
}> = ({ formData, formPage, setFormPage, files }) => {
  const [sumbitFunc] = useAddListingMutation();
  const token = useSelector(selectToken);
  const handleContinueClick = () => {
    if (formPage === 1) {
      isFirstPageFilled && setFormPage(2);
    }
    if (formPage === 2) {
      isSecondPageFilled && setFormPage(3);
    }
  };
  const handleGoBackClick = () => {
    if (formPage > 1) {
      setFormPage(formPage - 1);
    }
  };
  const handleSubmitClick = () => {
    if (token && isThirdPageFilled) {
      const formDataToSubmit = new FormData();
      // Dodaj pola formularza do FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formDataToSubmit.append(key, String(value));
        }
      });
      if (files) {
        for (const file of files) {
          formDataToSubmit.append("image", file);
        }
      }

      // Użyj funkcji submitFunc z nowym FormData
      sumbitFunc({ formData: formDataToSubmit, token: token });
    } else {
      // Wywołaj funkcję do pierwszego logowania
    }
  };

  const isFirstPageFilled =
    formData.name && formData.description && formData.address ? true : false;
  const isSecondPageFilled =
    formData.floorSize > 0 && formData.numberOfRooms > 0;
  const isThirdPageFilled =
    formData.permittedUsage &&
    ((formData.cardType === "lease" &&
      formData.leaseLength &&
      formData.leasePrice) ||
      (formData.cardType === "sell" && formData.sellPrice));
  return (
    <div className="flex-1 flex justify-center">
      <div className="flex -mt-72 space-y-4 flex-col items-center justify-center">
        <div className="flex items-center space-x-5">
          <div className="border-4 border-white h-[168px] rounded-full">
            <button
              onClick={handleGoBackClick}
              className={`bg-secondary rounded-full w-40 h-40 ${
                formPage > 1 ? "pulse-neon-btn" : "neon-btn"
              }`}
            >
              <div className="flex items-center justify-center ">
                <FaChevronLeft size={40} color="white" />
              </div>
            </button>
          </div>
          <div className="border-4 border-white h-[168px] rounded-full">
            <button
              onClick={() => {
                if (formPage < 3) {
                  handleContinueClick();
                } else {
                  handleSubmitClick();
                }
              }}
              className={`bg-secondary rounded-full w-40 h-40 ${
                (isFirstPageFilled && formPage === 1) ||
                (isSecondPageFilled && formPage === 2) ||
                (isThirdPageFilled && formPage === 3)
                  ? "pulse-neon-btn"
                  : "neon-btn"
              }`}
            >
              <div className="flex items-center justify-center ">
                {isThirdPageFilled ? (
                  <FiSend size={40} color="white" />
                ) : (
                  <FaChevronRight size={40} color="white" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNavButtons;
