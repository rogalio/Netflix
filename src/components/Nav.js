import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-[#111] fixed top-0 p-[10px] w-[100%] h-[50px] z-10 ease-in transition-all duration-100 ">
      <div className="flex justify-between">
        <img
          onClick={() => {
            navigate("/");
          }}
          className=" fixed top-[10px] left-0 w-[80px] object-contain pl-[20px] cursor-pointer"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => {
            navigate("/profil");
          }}
          className=" fixed right-[20px] w-[30px] h-[30px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
