import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useLoginMutation } from "../../../redux/api/auth";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/user/userSlice";

const AuthModal: React.FC<{ type: string }> = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocus, setInputFocus] = useState({
    email: false,
    password: false,
  });
  const [formData, setFormData] = useState<{
    email: string | undefined;
    password: string | undefined;
  }>({
    email: undefined,
    password: undefined,
  });
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const handleLoginClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res: any = await login({
      email: "damian11rs@onet.pl",
      password: "test123",
    });

    dispatch(setCredentials({ ...res.data }));
    searchParams.delete("auth");
    setSearchParams(searchParams);
  };

  return (
    <div className="absolute z-50 text-2xl w-[500px] h-[800px] bg-black/50 backdrop-blur-md rounded-xl flex flex-col space-y-5 items-center justify-between overflow-hidden">
      <div className="mt-5">
        <img
          className="w-40"
          src={require("../../../assets/logo-white-sm.png")}
          alt=""
        />
      </div>
      <form className="flex-1 flex flex-col space-y-5" action="">
        <span className="font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
          {type === "login" ? "Sign In" : "Sing up"}
        </span>
        <div className="space-y-2 w-72">
          <div
            className={`bg-blue-gradient rounded-xl ${
              inputFocus.email && "pl-1"
            }`}
          >
            <div
              className={`bg-white border-x-4  ${
                inputFocus.email && "border-l-0"
              } border-gray-600  py-2 px-4 flex flex-col rounded-xl`}
            >
              <label className="text-sm font-bold" htmlFor="email">
                Email Address
              </label>
              <input
                className="outline-none text-sm shadow-lg p-3 rounded bg-blue-gradient inline-block text-transparent bg-clip-text"
                id="email"
                type="text"
                placeholder=""
                spellCheck={false}
                onChange={(e) => {
                  setFormData((prevState) => {
                    return { ...prevState, email: e.target.value };
                  });
                }}
                onFocus={() => {
                  setInputFocus((prevState) => {
                    return { ...prevState, email: true };
                  });
                }}
                onBlur={() => {
                  setInputFocus((prevState) => {
                    return { ...prevState, email: false };
                  });
                }}
              />
            </div>
          </div>
          <div
            className={`bg-blue-gradient rounded-xl ${
              inputFocus.password && "pl-1"
            }`}
          >
            <div
              className={`bg-white border-x-4 rounded-xl  ${
                inputFocus.password && "border-l-0"
              } border-gray-600  py-2 px-4 flex flex-col`}
            >
              <label className="text-sm font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="outline-none text-sm shadow-lg p-3 rounded bg-blue-gradient inline-block text-transparent bg-clip-text"
                id="password"
                type="password"
                placeholder=""
                onChange={(e) => {
                  setFormData((prevState) => {
                    return { ...prevState, password: e.target.value };
                  });
                }}
                onFocus={() => {
                  setInputFocus((prevState) => {
                    return { ...prevState, password: true };
                  });
                }}
                onBlur={() => {
                  setInputFocus((prevState) => {
                    return { ...prevState, password: false };
                  });
                }}
              />
            </div>
          </div>
        </div>
        <button
          onClick={(e) => handleLoginClick(e)}
          className="w-full h-14 mx-auto bg-secondary border border-gray-600 rounded-lg flex items-center justify-center space-x-1"
        >
          <span className="font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
            Sign In
          </span>
          <FiLogIn size={20} color="#04cae9" />
        </button>
      </form>

      <img
        className="w-full"
        src={require("../../../assets/city.png")}
        alt=""
      />
    </div>
  );
};

export default AuthModal;
