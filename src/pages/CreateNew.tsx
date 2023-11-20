import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CreateNewForm from "../components/CreateNew/CreateNewForm";
import CreateNewHeader from "../components/CreateNew/CreateNewHeader";

const CreateNew = () => {
  return (
    <div className="w-full h-full p-16 space-y-10">
      <CreateNewHeader />
      <CreateNewForm />
    </div>
  );
};

export default CreateNew;
