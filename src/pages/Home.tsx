import React from "react";
import RealEstateList from "../components/Home/RealEstateList";

const Home = () => {
  return (
    <div className="w-full p-5 space-y-3">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
          Single Property Site <span className="text-white">List</span>
        </h1>
        <div className="bg-secondary text-sm  border border-gray-600 rounded-lg  w-44 flex justify-center">
          <select className="!outline-none bg-secondary text-gray-500 text-sm block w-40 p-2.5">
            <option selected>Filtering</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </section>
      <main>
        <RealEstateList />
      </main>
    </div>
  );
};

export default Home;
