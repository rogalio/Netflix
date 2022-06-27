import React from "react";
import Nav from "../components/Nav";
import PaymentPlan from "../components/PaymentPlan";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux/es/exports";
import { auth } from "../firebase";

const ProfilScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className=" text-white">
      <Nav />
      <div className=" flex flex-col w-1/2 mx-auto pt-[8%] max-w-3xl">
        <h1 className=" text-4xl font-normal border-b-[#282c2d] border-b-[1px] mb-5 pb-2 ">
          Modifier le profil
        </h1>
        <div className="flex">
          <img
            className=" h-24 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className=" ml-6 flex-1">
            <h2 className=" bg-[grey] p-2 text-base font-semibold pl-5">
              {user.email}
            </h2>
            <div className=" mt-5">
              <h3 className=" border-b-[#282c2d] border-b-[1px] pb-2">Plans</h3>
              <PaymentPlan />
              <button
                className=" px-5 py-2 text-base mt-[5%] w-full font-semibold bg-[#e50914]"
                onClick={() => auth.signOut()}
              >
                Deconnection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilScreen;
