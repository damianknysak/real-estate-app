import React, { useEffect } from "react";
import RealEstateList from "../components/Home/RealEstateList";
import { useLoginMutation } from "../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setCredentials } from "../redux/user/userSlice";
import HomeHeader from "../components/Home/HomeHeader";

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
      <HomeHeader />
      <main>
        <RealEstateList />
      </main>
    </div>
  );
};

export default Home;
