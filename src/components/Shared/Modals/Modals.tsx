import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AuthModal from "./AuthModal";

const Modals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("auth");

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      searchParams.delete("auth");
      setSearchParams(searchParams);
    }
  };

  return (
    <div
      onClick={(e) => handleCloseModal(e)}
      className={`${
        isActive
          ? "fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-50 flex flex-col justify-center max-w-[2000px] mx-auto items-center"
          : "hidden"
      }`}
    >
      {searchParams.get("auth") && (
        <AuthModal type={searchParams.get("auth")!} />
      )}

      {/* <img
        className="absolute w-full"
        src={require("../../../assets/city.png")}
        alt=""
      /> */}
    </div>
  );
};

export default Modals;
