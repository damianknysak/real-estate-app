import React from "react";
import AuthForm from "./AuthForm";

const AuthModal: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="absolute z-50 text-2xl w-[500px] h-[800px] bg-black/50 backdrop-blur-md rounded-xl flex flex-col space-y-5 items-center justify-between overflow-hidden">
      <div className="mt-5">
        <img
          className="w-40"
          src={require("../../../assets/logo-white-sm.png")}
          alt=""
        />
      </div>
      <AuthForm type={type} />

      <img
        className="w-full"
        src={require("../../../assets/city.png")}
        alt=""
      />
    </div>
  );
};

export default AuthModal;
