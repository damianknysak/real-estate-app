import React, { useEffect } from "react";
import RealEstateList from "../components/Home/RealEstateList";
import { useLoginMutation } from "../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setCredentials } from "../redux/user/userSlice";

const Home = () => {
  const [login] = useLoginMutation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const res: any = await login({
      email: "damian11rs@onet.pl",
      password: "test123",
    });

    dispatch(setCredentials({ ...res.data }));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="w-full p-5 space-y-3">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
          Single Property Site <span className="text-white">List</span>
        </h1>
        <div className="bg-secondary text-sm  border border-gray-600 rounded-lg  w-44 flex justify-center">
          <select
            defaultValue={"default"}
            className="!outline-none bg-secondary text-gray-500 text-sm block w-40 p-2.5"
          >
            <option value="default">Filtering</option>
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
