import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/user/userSlice";
import { useSearchParams } from "react-router-dom";
import { BASE_API_ORIGIN } from "../../../redux/api/api";

const UserSection = () => {
  const user = useSelector(selectUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const onLoginClick = () => {
    searchParams.set("auth", "login");
    setSearchParams(searchParams);
  };
  const onRegisterClick = () => {
    searchParams.set("auth", "register");
    setSearchParams(searchParams);
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <div className="space-y-5">
      {!user ? (
        <>
          <button
            onClick={onLoginClick}
            className="w-40 h-14 mx-auto bg-secondary border border-gray-600 rounded-lg flex items-center justify-center space-x-1"
          >
            <span className="font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
              Sign In
            </span>
            <FiLogIn size={20} color="#04cae9" />
          </button>
          <button
            onClick={onRegisterClick}
            className="w-40 h-14 mx-auto bg-secondary border border-gray-600 rounded-lg flex items-center justify-center space-x-1"
          >
            <span className="font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
              Sign Up
            </span>
            <FiUserPlus size={20} color="#04cae9" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onLogoutClick}
            className="w-40 h-14 mx-auto bg-secondary border border-gray-600 rounded-lg flex items-center p-2"
          >
            <img
              className="w-11 h-11 object-cover rounded-lg"
              src={`${BASE_API_ORIGIN}/${user.profileImage}`}
            />
            <div className="h-full flex-1 flex flex-col items-center justify-between">
              <span className="text-xs text-white font-bold">
                {user.firstName} {user.lastName}
              </span>
              <span className="text-xs text-gray-500">Customer</span>
            </div>
          </button>
          <button
            onClick={onLogoutClick}
            className="w-40 h-14 mx-auto bg-secondary border border-gray-600 rounded-lg flex items-center justify-center space-x-1"
          >
            <span className="font-bold bg-blue-gradient inline-block text-transparent bg-clip-text">
              Wyloguj
            </span>
            <FiLogOut size={20} color="#04cae9" />
          </button>
        </>
      )}
    </div>
  );
};

export default UserSection;
