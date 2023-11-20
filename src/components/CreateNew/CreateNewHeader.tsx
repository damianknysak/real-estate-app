const CreateNewHeader = () => {
  return (
    <div className="h-42 w-full py-0.5 bg-blue-gradient rounded-lg flex items-center justify-center">
      <div
        className={`h-40 w-full flex justify-between p-5 space-x-2 bg-primary/95 rounded-lg`}
      >
        <div className="flex flex-col justify-between">
          <h1 className="text-white font-bold text-2xl">
            Sell or Rent Your Property!
          </h1>
          <span className="text-gray-500 max-w-[400px]">
            Everything you need to know about creating a listing for your
            property. You need to just fill this easy form and you are ready to
            go!
          </span>
        </div>
        <img src={require("../../assets/city.png")} />
      </div>
    </div>
  );
};

export default CreateNewHeader;
